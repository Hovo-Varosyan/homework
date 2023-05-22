import { useNavigate } from "react-router"
import NavigateButton from "../../component/navigate.button"
import PropTypes from 'prop-types'

function Landing({ login, setLogin }) {
    const navigate = useNavigate()

    return (
        <div className="landing_body">
            {
                login === true ?
                    <>
                        <NavigateButton url={"/UserData"} name={"User data"} classis={"landing_userdata"} />
                        <button onClick={() => setLogin(false)} className="Home">Sign out</button>
                    </>
                    :
                    <NavigateButton url={"/Login"} name={"Login"} classis={"Home max_width"} />

            }
            <section>
                <div className="welcome">
                    <h1>Welcome my pages</h1>
                    <div>
                    </div>
                </div>
            </section>
            <section>
                <div className="divone div">
                    <div >
                        <h4> Why do we use it?</h4>
                        <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                            making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                            and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>

                    <div className="divtw">
                        <span>It is a </span>
                        <span className="span-div">
                            <span>l</span>
                            <span>o</span>
                            <span>n</span>
                            <span>g</span>
                        </span>
                    </div>
                </div>
                <div className="div">
                    <div className="load_div">
                        <div className="load">
                            <div className="div_load"></div>
                            <div className="div_load"></div>
                            <div className="div_load"></div>
                            <div className="div_load"></div>
                            <div className="div_load"></div>
                            < div className="div_load"></div>
                            <div className="div_load"></div>
                            < div className="div_load"></div>
                        </div>
                        <div className="text">
                            <h4>Where does it come from?</h4>
                            <p>
                                ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
                                obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
                                the Renaissance.
                                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </p>
                        </div>
                    </div>
                </div>
            </section >
        </div >

    )
}
Landing.propTypes = {
    logins: PropTypes.bool,
    setLogins: PropTypes.func
}
export default Landing