import './Main.css'
import slider from '/src/assets/Sliders.png'

import itemimg1 from '../../../assets/img.png'
import itemimg2 from '../../../assets/img (1).png'
import itemimg3 from '../../../assets/img (2).png'
import itemimg4 from '../../../assets/img (3).png'
import itemimg5 from '../../../assets/img (4).png'
import itemimg6 from '../../../assets/img (5).png'

import frameimg from '../../../assets/Frame 12.svg'


export default function Mainpart() {
  

  return (
    <main className='main'>
      <section className='mainslider'>
        <img src={slider} alt="" />
      </section>
      <section className='main_products'>
        <div className='productcontent'>
          <div className='contenttitle'>
            <h2 className='contenttitleh2'>Акции</h2>
          </div>
          <div className='contentframe'>
            <div className="frameitem">
              <img src={itemimg1}  alt="product" className='itemimg'/>
              <b>44,50 ₽</b>
              <p className='itemtitle'>
                Г/Ц Блинчики с мясом вес, Россия
              </p>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>

              </div>
              <button className='itembtn'>В корзину</button>
            </div>
            <div className="frameitem">
              <img src={itemimg2}  alt="product" className='itemimg'/>
              <b>44,50 ₽</b>
              <p className='itemtitle'>
                Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...
              </p>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <button className='itembtn'>В корзину</button>
            </div>
            <div className="frameitem">
              <img src={itemimg3}  alt="product" className='itemimg'/>
              <b>44,50 ₽</b>
              <p className='itemtitle'>
                Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...
              </p>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <button className='itembtn'>В корзину</button>
            </div>
            <div className="frameitem">
              <img src={itemimg4}  alt="product" className='itemimg'/>
              <b>44,50 ₽</b>
              <p className='itemtitle'>
                Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...
              </p>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <button className='itembtn'>В корзину</button>
            </div>
          </div>
        </div>
      </section>
      <section className='main_products'>
        <div className='productcontent'>
          <div className='contenttitle'>
            <h2 className='contenttitleh2'>Новинки</h2>
          </div>
          <div className='contentframe'>
            <div className="frameitem">
              <img src={itemimg5}  alt="product" className='itemimg'/>
              <b>599,99 ₽</b>
              <p className='itemtitle'>
                Г/Ц Блинчики с мясом вес, Россия
              </p>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <button className='itembtn'>В корзину</button>
            </div>
            <div className="frameitem">
              <img src={itemimg3}  alt="product" className='itemimg'/>
              <b>44,50 ₽</b>
              <p className='itemtitle'>
                Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...
              </p>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <button className='itembtn'>В корзину</button>
            </div>
            <div className="frameitem">
              <img src={itemimg4}  alt="product" className='itemimg'/>
              <b>159,99 ₽</b>
              <p className='itemtitle'>
                Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...
              </p>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <button className='itembtn'>В корзину</button>
            </div>
            <div className="frameitem">
              <img src={itemimg2}  alt="product" className='itemimg'/>
              <b>49,39₽</b>
              <p className='itemtitle'>
                Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...
              </p>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <button className='itembtn'>В корзину</button>
            </div>
          </div>
        </div>
      </section>
      <section className='main_products'>
        <div className='productcontent'>
          <div className='contenttitle'>
            <h2 className='contenttitleh2'>Покупали раньше</h2>
          </div>
          <div className='contentframe'>
            <div className="frameitem">
              <img src={itemimg6}  alt="product" className='itemimg'/>
              <b>77,99 ₽</b>
              <p className='itemtitle'>
                Г/Ц Блинчики с мясом вес, Россия
              </p>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <button className='itembtn'>В корзину</button>
            </div>
            <div className="frameitem">
              <img src={itemimg4}  alt="product" className='itemimg'/>
              <b>44,50 ₽</b>
              <p className='itemtitle'>
                Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...
              </p>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <button className='itembtn'>В корзину</button>
            </div>
            <div className="frameitem">
              <img src={itemimg5}  alt="product" className='itemimg'/>
              <b>159,99 ₽</b>
              <p className='itemtitle'>
                Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...
              </p>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <button className='itembtn'>В корзину</button>
            </div>
            <div className="frameitem">
              <img src={itemimg2}  alt="product" className='itemimg'/>
              <b>49,39₽</b>
              <p className='itemtitle'>
                Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...
              </p>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <button className='itembtn'>В корзину</button>
            </div>
          </div>
        </div>
      </section>
      <section className='framecartu'>
        <h2 className='framecartuh2'>Специальные предложения</h2>
        <img src={frameimg} alt="img" className='framecartuimg' />
      </section>
      <section className='mainkarta'>
        <h2 className='mainkartatext'>Наши магазины</h2>
        
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0730692531147!2d69.20123767668947!3d41.28551417131297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sen!2s!4v1698758122698!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        
      </section>
    </main>
  )
}
