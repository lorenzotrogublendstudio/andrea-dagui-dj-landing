<?php
if (php_sapi_name() !== 'cli') {
    die("Solo da terminale.");
}

// Percorsi
$baseDir = dirname(__DIR__);
$reportsDir = $baseDir . '/reports';

if (!is_dir($reportsDir)) {
    mkdir($reportsDir, 0755, true);
}

echo "--- Export Excel WhatsApp ---\n";

// 1. Carica Autoload e Config
require_once $baseDir . '/vendor/autoload.php';
require_once $baseDir . '/app/config/database.php';
require_once $baseDir . '/app/models/WhatsAppClick.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Border;

// 2. Dati
$model = new WhatsAppClick();
$total = $model->getTotalClicks();
$bySection = $model->getClicksBySection();
$allRows = $model->getAllClicks();

echo "Trovati $total click.\n";

// 3. Costruisci Excel (Logica identica al Controller ma salva su file)
$spreadsheet = new Spreadsheet();
$sheet = $spreadsheet->getActiveSheet();
$sheet->setTitle('Report Giornaliero');

// Stili
$headerStyle = [
    'font' => ['bold' => true, 'color' => ['rgb' => 'FFFFFF']],
    'fill' => ['fillType' => Fill::FILL_SOLID, 'startColor' => ['rgb' => 'D02894']],
    'alignment' => ['horizontal' => Alignment::HORIZONTAL_CENTER],
];

// Intestazioni
$sheet->setCellValue('A1', 'REPORT AUTOMATICO');
$sheet->setCellValue('A2', 'Data: ' . date('d/m/Y H:i'));
$sheet->setCellValue('A3', 'Totale: ' . $total);

// Tabella Sezioni
$row = 5;
$sheet->setCellValue('A'.$row, 'Sezione');
$sheet->setCellValue('B'.$row, 'Click');
$sheet->getStyle("A$row:B$row")->applyFromArray($headerStyle);

foreach ($bySection as $data) {
    $row++;
    $sheet->setCellValue('A'.$row, ucfirst(str_replace('_', ' ', $data['section_name'])));
    $sheet->setCellValue('B'.$row, $data['count']);
}

// Tabella Dettagli
$row += 3;
$sheet->setCellValue('A'.$row, 'ID');
$sheet->setCellValue('B'.$row, 'Sezione');
$sheet->setCellValue('C'.$row, 'Data');
$sheet->getStyle("A$row:C$row")->applyFromArray($headerStyle);

foreach ($allRows as $data) {
    $row++;
    $sheet->setCellValue('A'.$row, $data['id']);
    $sheet->setCellValue('B'.$row, $data['section_name']);
    $sheet->setCellValue('C'.$row, $data['clicked_at']);
}

foreach (range('A', 'C') as $col) {
    $sheet->getColumnDimension($col)->setAutoSize(true);
}

// 4. Salva File
$filename = 'report_' . date('Y-m-d_H-i-s') . '.xlsx';
$filepath = $reportsDir . '/' . $filename;

$writer = new Xlsx($spreadsheet);
$writer->save($filepath);

echo "Salvato in: $filepath\n";
?>