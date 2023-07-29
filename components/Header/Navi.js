import Navistyle from '../../styles/Navi.module.css'
export default function Navi() {
  return (
    <>
    <div className={Navistyle.navi} id={Navistyle.flex}>
        <div className={Navistyle.left} id={Navistyle.flex}>
            <div className={Navistyle.email} >
                <i className="fa fa-envelope"></i>
                <span className={Navistyle.span}>wavers@gmail.com</span>
            </div>
            <div className={Navistyle.call}>
                <i className="fa fa-phone-alt"></i>
                <span className={Navistyle.span}>+216 66 666 666</span>
            </div>
        </div>

        <div className={Navistyle.right} id={Navistyle.flex}>
            <div className={Navistyle.twitter}>
                <i className="fab fa-twitter"></i>
                <span className={Navistyle.span}>Twitter</span>
            </div>
            <div className={Navistyle.facebook}>
                <i className="fab fa-facebook-f"></i>
                <span className={Navistyle.span}>Facebook</span>
            </div>
        </div>
    </div>
    </>
  )
}
