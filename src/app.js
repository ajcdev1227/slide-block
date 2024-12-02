import React, {useState, useEffect, useRef} from "react";
import {Timeline, Container, PulseModal} from "./components";
import img11 from './assets/images/cards/img1-1.png';
import img12 from './assets/images/cards/img1-2.png';
import img13 from './assets/images/cards/img1-3.png';
import img21 from './assets/images/cards/img2-1.png';
import img22 from './assets/images/cards/img2-2.png';
import img23 from './assets/images/cards/img2-3.png';
import img31 from './assets/images/cards/img3-1.png';
import img32 from './assets/images/cards/img3-2.png';
import img41 from './assets/images/cards/img4-1.png';
import img42 from './assets/images/cards/img4-2.png';
import img43 from './assets/images/cards/img4-3.png';

import gif11 from "./assets/gifs/R&A-ReferralSummaryReview.gif"
import gif12 from "./assets/gifs/R&A - Pending Reason Sticky Note.gif"
import gif13 from "./assets/gifs/R&A - AI Insight.gif"
import gif21 from "./assets/gifs/Episodes - Initial Visit Check.gif"
import gif22 from "./assets/gifs/Episodes - SDiC - GIF.gif"
import gif23 from "./assets/gifs/Proactively addressing.png"
import gif31 from "./assets/gifs/Hospice Evaluations.gif"
import gif32 from "./assets/gifs/Transitions Notes.gif"
import gif41 from "./assets/gifs/Muse - Revocation Risk - GIF.gif"
import gif42 from "./assets/gifs/Muse - SDiC - GIF.gif"
import gif43 from "./assets/gifs/Muse - HVLDL - GIF.gif"

import raSVG from './assets/svgs/RA.svg'
import episodesSVG from './assets/svgs/Episodes.svg'
import transitionsSVG from './assets/svgs/Transitions.svg'
import museSVG from './assets/svgs/Muse.svg'

import imgMuse from './assets/images/Muse.png'
import imgPulse from './assets/images/Pulse.png'

const initCardsInfo = [
	{
		title: 'Referrals & Admissions',
		src: imgPulse,
		subTitle: "Pulse R&A",
		type: 'Pulse',
		icon: raSVG,
		cardInfo: [
			{
				src: img11,
				title: "Patient Referral Received",
				challenges: [
					"Intake teams can easily miss patient data due to lengthy, complex referral records.",
					"Admitting clinicians are often underprepared for their first visit because it’s difficult to thoroughly review referral packets."
				],
				nonChallenges: {
					src: gif11,
					contents: [
						"The referral packet is intelligently analyzed and converted into a single-page Referral Summary with diagnostic insights for review.",
						"Admitting clinicians can review patient data much more effectively for engaging, well-prepared visits that create a better patient experience."
					]
				},
			},
			{
				src: img12,
				title: "Patient Admission is Pending",
				challenges: [
					"Patients spend too much time in pending status and must deal with uncertainty and longer times to admission.",
					"Due to capacity constraints and low admission rates, acute care settings are sending out about 6 referrals per patient."
				],
				nonChallenges: {
					src: gif12,
					contents: [
						"Intake teams are able to use Sticky Notes and EMR connectivity to quickly understand and act on pending admissions.",
						"The patient experiences quicker admission time with less worry and better-informed providers."
					]
				}
			},
			{
				src: img13,
				title: "Patient Plan of Care Development",
				challenges: [
					"Conflicts between different clinical documents go unnoticed and care planning takes place based on incomplete or inaccurate information.",
					"The patient starts their home health experience at a disadvantage with a care plan that will require adjustments for the right level of care."
				],
				nonChallenges: {
					src: gif13,
					contents: [
						"The Admission Summary highlights conflicting and supporting clinical evidence across clinical notes, referral documents, and OASIS.",
						"Care teams receive smart insights for clinical documentation improvement, starting the patient off on the right foot with a more accurate Plan of Care",
						"Coding and reimbursements are more accurate to the patient’s condition and level of care provided."
					]
				}
			}
		],
		color: '#A1CFC2'
	},
	{
		title: "Episodes",
		src: imgPulse,
		subTitle: "Pulse Episodes",
		type: "Pulse",
		icon: episodesSVG,
		cardInfo: [
			{
				src: img21,
				title: "The Patient's Condition Worsens",
				challenges: [
					"Care teams can miss clinical trends that would require updated care plans and fail to address negative changes in condition.",
					"Patients receive care based on outdated information, making hospitalizations more likely as real-time needs aren’t met.",
					"When care levels don’t align with acuity, agencies can be penalized with a Low Utilization Payment Adjustment (LUPA)"
				],
				nonChallenges: {
					src: gif21,
					contents: [
						"Breakthrough predictive analytics drive higher responsiveness to changes in patient condition as trends are compared against a broad data set to predict needed Plan of Care updates.",
						"Patients experience care that is consistently adjusted to their condition, avoiding hospitalizations in cases where they may otherwise have happened.",
						"Having provided the appropriate level of care relative to the patient’s condition, the agency is fully compensated for the episode."
					]
				}
			},
			{
				src: img22,
				title: "The Patient's Condition Significantly Improves",
				challenges: [
					"Agencies must rely on untargeted, standardized scheduling that causes overutilization and provider burnout.",
					"Agencies can struggle to find additional resources for higher-risk patients, leading to cascading care alignment problems."
				],
				nonChallenges: {
					src: gif22,
					contents: [
						"Provides visit-by-visit insights into patients whose utilization isn’t aligned to their risk profile, driving clinician action to balance the scale.",
						"Agencies are able to reallocate care resources with confidence that patients are still receiving appropriate care."
					]
				}
			},
			{
				src: img23,
				title: "End of Episode Plan of Care Review",
				challenges: [
					"During the patient’s case conference, care teams can overlook clinical evidence that indicates recertification would be appropriate.",
					"Patients can be discharged to their community too early, which will raise their risk for subsequent hospitalization or readmission to home health care."
				],
				nonChallenges: {
					src: gif23,
					contents: [
						"Intelligently surfaces clinical insights to facilitate end-of-episode care decisions, improving continuity of care for those patients best served by staying in home health.",
						"Patients have higher confidence that decisions about their care are rooted in clinical evidence and if they’re discharged, it’s for good reason.",
						"Evaluated patients who were discharged from agencies using Pulse were on average more likely to remain in community, with less disruption to their lives."
					]
				}
			}
		],
		color: '#007991'
	},
	{
		title: "Transitions",
		src: imgPulse,
		subTitle: 'Pulse Transitions',
		type: "Pulse",
		icon: transitionsSVG,
		cardInfo: [
			{
				src: img31,
				title: "Patient Would Be Better Served by Hospice Care",
				challenges: [
					"Patient volume, limited technologies, and other factors lead agencies to miss changes in patient condition that make hospice care more appropriate.",
					"Patients aren’t made aware of their care options or educated on hospice.",
					"Patients with high mortality risk remain in home health, not being cared for appropriately and stretching resources."
				],
				nonChallenges: {
					src: gif31,
					contents: [
						"Proprietary data science surfaces patients whose condition make them more likely to pass away in the next 60 days. Recommendations and supporting evidence are given.",
						"Care teams can move quickly and confidently through the transition evaluation workflow, prioritizing decisions by risk and helping patients move earlier.",
						"Patients spend more appropriate amounts of time in hospice, receiving with their family improved care as they near death.",
						"More home health resources are freed up as high-utilization patients move to hospice."
					]
				}
			},
			{
				src: img32,
				title: "There Are Questions About the Patient's Fit for Hospice Care",
				challenges: [
					"Some patients who should be moving to hospice are spending too much time being evaluated by siloed teams with outdated tools that limit efficient patient status decisions.",
					"Decisions made by transition navigators aren’t transparent to clinical managers, which can lead to conflict."
				],
				nonChallenges: {
					src: gif32,
					contents: [
						"Transitions brings transition navigators and clinical managers together with transparent hospice evaluation workflows and the ability to exchange notes between teams and into the EMR.",
						"Patients spend less time in limbo, and clinicians can use surfaced clinical insights to better substantiate decisions to patients for greater peace of mind."
					]
				}
			}
		],
		color: '#9BC418'
	},
	{
		title: "Muse",
		src: imgMuse,
		subTitle: "Muse",
		type: "Muse",
		icon: museSVG,
		cardInfo: [
			{
				src: img41,
				title: "Patient Considering Hospice Revocation",
				challenges: [
					"Lack of clarity about a prognosis, caregiver burdens, and other issues can lead patients to revoke hospice care. This may unintentionally put them in a less appropriate care environment.",
					"It can be difficult to consistently understand every patient’s risk trajectory without help, but hospice agencies with high revocation rates are impacted in quality metrics, revenue, and audit risk."
				],
				nonChallenges: {
					src: gif41,
					contents: [
						"Applying breakthrough data science models, Muse identifies patients who are 5x more likely to revoke hospice care within 30 days and recommends action for hospice teams.",
						"Because care teams can add a tuck in call, education, volunteer services, and other resources, patients feel better supported in and prepared for their hospice journey."
					]
				}
			},
			{
				src: img42,
				title: "Patient Experiences a Sudden Decline in Condition (SDiC)",
				challenges: [
					"Care teams can miss trends in clinical data that indicate the need for a Plan of Care change and fail to address negative movement in patient condition.",
					"Because of this, patients can experience a level of care based on outdated information that doesn’t address their needs."
				],
				nonChallenges: {
					src: gif42,
					contents: [
						"Predictive analytics help providers respond to changes in patient condition with evidence-based utilization recommendations.",
						"Patients experience care that is consistently adjusted to their condition, preventing gaps in care",
						"Agencies are compensated for increased care that is clinically supported through additional SIA units."
					]
				}
			},
			{
				src: img43,
				title: "Patient Enters Final Days of Life",
				challenges: [
					"Signs of high mortality risk aren’t always readily apparent, and finding clinical evidence manually is difficult across a large census.",
					"Patients who enter their final days of life without care increases won’t receive appropriate support, leading to a worse experience patients and poorer quality results for agencies."
				],
				nonChallenges: {
					src: gif43,
					contents: [
						"Muse helps identify patients who are more likely to pass away, and ensures additional resources are allocated to fully support them.",
						"On average, Muse clients perform 45.5% better on HVLDL than the national benchmark, with improvements as high as 89% more patients meeting HVLDL visits. Clients like Amedisys, Avow, Bayada, Knute Nelson, and others have found great success with Muse"
					]
				}
			}
		],
		color: '#1A2141'
	}
]

function App() {
	const setTranslateXRef = useRef(null);
	const [curIndex, setCurIndex] = useState(0);
	const [curSubIndex, setCurSubIndex] = useState(0);
	const [modalShow, setModalShow] = useState(false);
	const [cardsInfo, setCardsInfo] = useState(initCardsInfo);

	useEffect(() => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap';
		document.head.appendChild(link);
	}, []);

	const setTranslatePosition = (position) => {
		if (setTranslateXRef.current) {
			setTranslateXRef.current(position);
		}
	};

	return (
		<>
			<div className="flex flex-col bg-white">
				<Container
					cardsInfo={cardsInfo}
					curIndex={curIndex}
					curSubIndex={curSubIndex}
					setCurIndex={setCurIndex}
					setCurSubIndex={setCurSubIndex}
					setModalShow={setModalShow}
					ref={setTranslateXRef}
				/>
				<Timeline
					cardsInfo={cardsInfo}
					curIndex={curIndex}
					curSubIndex={curSubIndex}
					setTranslatePosition={setTranslatePosition}
				/>
				{modalShow && (
					<PulseModal
						cardsInfo={cardsInfo}
						setModalShow={setModalShow}
						curIndex={curIndex}
						curSubIndex={curSubIndex}
					/>
				)}
			</div>
		</>
	);
}

export default App;
