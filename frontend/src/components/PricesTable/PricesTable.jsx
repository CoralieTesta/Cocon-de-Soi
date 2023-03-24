import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import s from "./style.module.css"

export function PricesTable() {
    return(
        <Table className={s.table}>
            <Thead>
                <Tr className={s.tr}>
                    <Th className={s.th}>Type</Th>
                    <Th className={s.th}>Durée</Th>
                    <Th className={s.th}>Tarif normal</Th>
                    <Th className={s.th}>Forfait pour 3 massages</Th>
                    <Th className={s.th}>Forfait pour 5 massages</Th>
                    <Th className={s.th}>Forfait pour 10 massages</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr className={s.tr}>
                    <Td className={s.td}>Massage global</Td>
                    <Td className={s.td}>Entre 1h et 1h30</Td>
                    <Td className={s.td}>60€</Td>
                    <Td className={s.td}>150€ au lieu de 180€</Td>
                    <Td className={s.td}>240€ au lieu de 300€</Td>
                    <Td className={s.td}>480€ au lieu de 600€</Td>
                </Tr>
                <Tr className={s.tr}>
                    <Td className={s.td}>Massage sur zone ciblée</Td>
                    <Td className={s.td}>45min</Td>
                    <Td className={s.td}>45€</Td>
                    <Td className={s.td}>120€ au lieu de 135€</Td>
                    <Td className={s.td}>190€ au lieu de 225€</Td>
                    <Td className={s.td}>330€ au lieu de 450€</Td>
                </Tr>
                <Tr className={s.tr}>
                    <Td className={s.td}>Massage sur zone ciblée</Td>
                    <Td className={s.td}>30min</Td>
                    <Td className={s.td}>30€</Td>
                </Tr>
            </Tbody>
        </Table>
    )
}
