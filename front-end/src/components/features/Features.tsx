import './Features.css'

export function Features() {
    return (
    <>
    <section className="features">
        <div className="features-inner">
            <div className="section-label" id="why">Why Lougon</div>

            <h2 className="section-title" /* style="margin:0 0 6px;" */>Built differently, by design</h2>

            <p className="section-sub" /* style="margin:0;" */>We care about the details that make software actually enjoyable to use — whether you're a company or an individual investor.</p>

            <div className="feat-grid">
                <div className="feat-item">
                    <div className="feat-icon"><i className="ti ti-cloud" aria-hidden="true"></i></div>
                    <div className="feat-title">100% cloud</div>
                    <p className="feat-desc">No installation needed. Access your systems from any device, anywhere.</p>
                </div>
                <div className="feat-item">
                    <div className="feat-icon"><i className="ti ti-lock" aria-hidden="true"></i></div>
                    <div className="feat-title">Secure by default</div>
                    <p className="feat-desc">Your data is encrypted and protected following best security practices.</p>
                </div>
                <div className="feat-item">
                    <div className="feat-icon" /* style="background:#e1f5ee; color:#0f6e56" */><i className="ti ti-headset" aria-hidden="true"></i></div>
                    <div className="feat-title">Local support</div>
                    <p className="feat-desc">Real humans based in Brazil, ready to help you when you need it most.</p>
                </div>
                <div className="feat-item">
                    <div className="feat-icon" /* style="background:#e1f5ee; color:#0f6e56" */><i className="ti ti-refresh" aria-hidden="true"></i></div>
                    <div className="feat-title">Always evolving</div>
                    <p className="feat-desc">Regular updates based on customer feedback, at no extra cost.</p>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}