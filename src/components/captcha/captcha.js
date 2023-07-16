import "./captcha.css"
const Captcha=()=> {
    return (
        <div className="captcha">
<div className="captchaCode">
feefwefw
</div>
<div class="inline" >
		<i class="fas fa-sync"></i>
	</div>
<div className="refreshCaptchaCode"></div>
<input type="text" className="enterCaptcha" placeholder="Введите код с картинки" />
        </div>
    )
}
export default Captcha