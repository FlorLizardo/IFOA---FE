import LinkInfoFooter from "../atomo/LinksInfoFooter";

const ColFooter = () => {
  
const linksCol1 = ['Audio and subtitles', 'Media Center', 'Privacy', 'Contact Us']
const linksCol2 = ['Audio Description', 'Investor Relations', 'Legal Notices']
const linksCol3 = ['Help Center', 'Jobs', 'Cookies Preferences']
const linksCol4 = ['Gift Cards', 'Terms of Use', 'Corporate Information']

	return (
		<div className="row d-flex justify-content-center">
			<div className="col-lg-2 d-flex flex-column">
				{linksCol1.map((link, index) => (
					<LinkInfoFooter link={link} key={index} />
				))}
				<button className="btn-services border border-secondary text-secondary bg-black mt-lg-4">
					Service Code
				</button>
			</div>

			<div className="col-lg-2 d-flex flex-column">
				{linksCol2.map((link, index) => (
					<LinkInfoFooter link={link} key={index}/>
				))}
			</div>

			<div className="col-lg-2 d-flex flex-column">
				{linksCol3.map((link, index) => (
					<LinkInfoFooter link={link} key={index} />
				))}
			</div>

			<div className="col-lg-2 d-flex flex-column">
				{linksCol4.map((link, index) => (
					<LinkInfoFooter link={link} key={index} />
				))}
			</div>
		</div>
	);
};

export default ColFooter;
