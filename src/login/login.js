import { useNavigate } from "react-router-dom"
import "./style.css"

export const LoginPage = () => {
    const navigation = useNavigate()
    return (
        <civ class="container">

            <div className="row login-container">
                <div className="col-sm-8">
                    <img src="https://content.jdmagicbox.com/comp/salem/z4/0427px427.x427.110707142832.t5z4/catalogue/sri-shanmuga-college-of-engineering-and-technology-morur-salem-colleges-2fjjcbh.jpg" />
                </div>
                <div className="col-sm-4">
                    <div className="login-form">
                        <form>
                            <div class="form-group">
                                <label for="email">Email address:</label>
                                <input type="email" class="form-control" id="email" />
                            </div>
                            <div class="form-group">
                                <label for="pwd">Password:</label>
                                <input type="password" class="form-control" id="pwd" />
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" /> Remember me</label>
                            </div>
                            <button type="button" onClick={() => navigation('/dashboard')} class="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </civ>

    )
}