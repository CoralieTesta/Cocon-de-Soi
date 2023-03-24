import { Proposition } from "../../components/Proposition/Proposition";
import orchidee from "../../assets/orchidee1.jpg"
import { PricesList } from "../../components/PricesList/PricesList";
import { PricesTable } from "../../components/PricesTable/PricesTable";

export function Prices() {
    return(
        <div style={{
            backgroundColor: '#F6E9DB'
            }}>
            <Proposition
                title="Tarifs"
                //p1="Sur RDV"
                imgUrl={orchidee}
            />
            <PricesList/>
        </div>
    )
}