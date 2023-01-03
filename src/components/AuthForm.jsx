


const AuthForm = (props) => {
    return (
        <div className="form" onClick={e => e.stopPropagation()}>
            <div className="form-header">
                <div className="header-tab">Sign In</div>
                <div className="header-tab">Sign Up</div>
            </div>
            <div className="form-description">
                Create user account for using our service. Create user account for using our service
            </div>
            <div className="form-input">
                <div className="input-wrapper">
                    <div className="label"></div>
                    <input type="text" />
                </div>
                <div className="input-wrapper">
                    <div className="label"></div>
                    <input type="text" />
                </div>
                <div className="input-wrapper">
                    <div className="label"></div>
                    <input type="text" />
                </div>
                <div className="input-wrapper">
                    <div className="label"></div>
                    <div className="capcha">22+45</div>
                    <input type="text" />
                </div>
            </div>70
            <div className="form-button">
                <div className="checkbox-wrapper">
                    <input type="checkbox" /> Remember me
                </div>
                <div className="button">Create Account</div>
            </div>
        </div>
    )
}

export default AuthForm;