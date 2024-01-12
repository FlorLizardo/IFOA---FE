const FooterNetflix = () => {
const styles = {
	marginTop: '8rem',
}

	return (
		<footer style={styles} className="container-fluid px-5 pb-3">
			<div className="row d-flex justify-content-center pb-lg-2">
				<div className="col-8">
					<a
						className="text-decoration-none pe-2"
						href="https://www.facebook.com/"
						target="_blank"
					>
						<i className="bi bi-facebook text-secondary fs-4"></i>
					</a>
					<a
						className="text-decoration-none pe-2"
						href="https://www.instagram.com/"
						target="_blank"
					>
						<i className="bi bi-instagram text-secondary fs-4"></i>
					</a>
					<a
						className="text-decoration-none pe-2"
						href="https://twitter.com/"
						target="_blank"
					>
						<i className="bi bi-twitter text-secondary fs-4"></i>
					</a>
					<a
						className="text-decoration-none pe-2"
						href="https://www.youtube.com/"
						target="_blank"
					>
						<i className="bi bi-youtube text-secondary fs-4"></i>
					</a>
				</div>
			</div>
			{/* <!--info--> */}
			<div className="row d-flex justify-content-center">
				<div className="col-lg-2 d-flex flex-column">
					<a className="link-secondary text-decoration-none pb-lg-2" href="#">
						Audio and subtitles
					</a>
					<a className="link-secondary text-decoration-none pb-lg-2" href="#">
						Media Center
					</a>
					<a className="link-secondary text-decoration-none pb-lg-2" href="#">
						Privacy
					</a>
					<a className="link-secondary text-decoration-none pb-lg-2" href="#">
						Contact Us
					</a>
					<button className="btn-services border border-secondary text-secondary bg-black mt-lg-4">
						Service Code
					</button>
				</div>

				<div className="col-lg-2 d-flex flex-column">
					<a className="link-secondary text-decoration-none pb-lg-2" href="#">
						Audio Description
					</a>
					<a className="link-secondary text-decoration-none pb-lg-2" href="#">
						Investor Relations
					</a>
					<a className="link-secondary text-decoration-none pb-lg-2" href="#">
						Legal Notices
					</a>
				</div>

				<div className="col-lg-2 d-flex flex-column">
					<a className="link-secondary text-decoration-none pb-lg-2" href="#">
						Help Center
					</a>
					<a className="link-secondary text-decoration-none pb-lg-2" href="#">
						Jobs
					</a>
					<a className="link-secondary text-decoration-none pb-lg-2" href="#">
						Cookies Preferences
					</a>
				</div>

				<div className="col-lg-2 d-flex flex-column">
					<a className="link-secondary text-decoration-none pb-lg-2" href="#">
						Gift Cards
					</a>
					<a className="link-secondary text-decoration-none pb-lg-2" href="#">
						Terms of Use
					</a>
					<a className="link-secondary text-decoration-none pb-lg-2" href="#">
						Corporate Information
					</a>
				</div>
			</div>

			{/* <!--copyright--> */}
			<div className="row d-flex justify-content-center mt-lg-3">
				<div className="col-8">
					<small className="text-secondary">© 1997-2019 Netflix.Inc.</small>
				</div>
			</div>
		</footer>
	);
};

export default FooterNetflix;
