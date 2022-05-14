import styles from "../../styles/crypto/pricing.module.css";
import Coins from './Coins';

export const Pricing = ({ markets }) => {

  return (
      <section className={styles.crypto_chart}>
      <div className={styles.valuation}>
      {markets.map(coin => {
                return (
                  
                     <Coins 
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.market_cap}
                        volume={coin.total_volume}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                    />
                 
                   
                )
            })}
      </div>
      </section>
  )
}

export default Pricing;