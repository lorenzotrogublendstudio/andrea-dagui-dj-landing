<?php

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Fill;

class ExportController extends Controller
{
    public function excel()
    {
        // 1. Recupero Dati
        $model = new WhatsAppClick();
        $total = $model->getTotalClicks();
        $bySection = $model->getClicksBySection();
        $allRows = $model->getAllClicks();

        // 2. Creazione Spreadsheet
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setTitle('Report WhatsApp');

        // --- STILE INTESTAZIONI ---
        $headerStyle = [
            'font' => ['bold' => true, 'color' => ['rgb' => 'FFFFFF']],
            'fill' => ['fillType' => Fill::FILL_SOLID, 'startColor' => ['rgb' => 'D02894']], // Colore Brand
            'alignment' => ['horizontal' => Alignment::HORIZONTAL_CENTER],
            'borders' => ['allBorders' => ['borderStyle' => Border::BORDER_THIN]],
        ];

        // --- SEZIONE 1: RIEPILOGO ---
        $sheet->setCellValue('A1', 'REPORT CLICK WHATSAPP');
        $sheet->mergeCells('A1:B1');
        $sheet->getStyle('A1')->getFont()->setBold(true)->setSize(14);
        
        $sheet->setCellValue('A2', 'Generato il:');
        $sheet->setCellValue('B2', date('d/m/Y H:i'));
        
        $sheet->setCellValue('A3', 'Click Totali:');
        $sheet->setCellValue('B3', $total);
        $sheet->getStyle('B3')->getFont()->setBold(true)->getColor()->setRGB('D02894');

        // --- SEZIONE 2: STATISTICHE PER SEZIONE ---
        $row = 6;
        $sheet->setCellValue('A' . $row, 'STATISTICHE PER SEZIONE');
        $sheet->mergeCells('A' . $row . ':B' . $row);
        $sheet->getStyle('A' . $row)->getFont()->setBold(true);
        
        $row++;
        $sheet->setCellValue('A' . $row, 'Sezione');
        $sheet->setCellValue('B' . $row, 'Click');
        $sheet->getStyle('A' . $row . ':B' . $row)->applyFromArray($headerStyle);

        foreach ($bySection as $data) {
            $row++;
            $sheet->setCellValue('A' . $row, ucfirst(str_replace('_', ' ', $data['section_name'])));
            $sheet->setCellValue('B' . $row, $data['count']);
        }
        
        // Bordo tabella statistiche
        $sheet->getStyle('A7:B' . $row)->getBorders()->getAllBorders()->setBorderStyle(Border::BORDER_THIN);

        // --- SEZIONE 3: DETTAGLIO RAW ---
        $row += 4; // Spazio
        $startRow = $row;
        
        $sheet->setCellValue('A' . $row, 'DETTAGLIO COMPLETO');
        $sheet->mergeCells('A' . $row . ':C' . $row);
        $sheet->getStyle('A' . $row)->getFont()->setBold(true)->setSize(12);

        $row++;
        $sheet->setCellValue('A' . $row, 'ID');
        $sheet->setCellValue('B' . $row, 'Sezione');
        $sheet->setCellValue('C' . $row, 'Data e Ora');
        $sheet->getStyle('A' . $row . ':C' . $row)->applyFromArray($headerStyle);

        foreach ($allRows as $data) {
            $row++;
            $sheet->setCellValue('A' . $row, $data['id']);
            $sheet->setCellValue('B' . $row, ucfirst(str_replace('_', ' ', $data['section_name'])));
            $sheet->setCellValue('C' . $row, date('d/m/Y H:i:s', strtotime($data['clicked_at'])));
        }

        // Autosize colonne
        foreach (range('A', 'C') as $col) {
            $sheet->getColumnDimension($col)->setAutoSize(true);
        }

        // 3. Output e Download
        $filename = 'report_whatsapp_' . date('Y-m-d') . '.xlsx';

        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment;filename="' . $filename . '"');
        header('Cache-Control: max-age=0');

        $writer = new Xlsx($spreadsheet);
        $writer->save('php://output');
        exit;
    }
}
?>