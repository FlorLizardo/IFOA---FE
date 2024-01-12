import LinkSocialFooter from "../atomo/LinkSocialFooter";

import ColFooter from "../molecola/ColFooter";

const FooterNetflix = () => {
const styles = {
	marginTop: '8rem',
}

const social = {
	hrefSocial: ["https://www.facebook.com/" ,"https://www.instagram.com/", "https://www.instagram.com/", "https://twitter.com/"],
	iconSocial: ['bi bi-facebook' ,'bi bi-instagram', 'bi bi-twitter', 'bi bi-youtube']
}

	return (
		<footer style={styles} className="container-fluid px-5 pb-3">
			<div className="row d-flex justify-content-center pb-lg-2">
				<div className="col-8">
					{social.hrefSocial.map((href, index) => <LinkSocialFooter href={href} icon={social.iconSocial[index]} key={index}/>)}
				</div>
			</div>
			
			{/* <!--info--> */}
			<ColFooter />

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
