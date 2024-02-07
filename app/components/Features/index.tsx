import Image from "next/image";
import Link from 'next/link';

interface datatype {
    imgSrc: string;
    heading: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/features/time.svg",
        heading: "Facility Management",
        paragraph: 'Falon’s capabilities include management of ON and OFF site mailroom & warehouse facilities. We specialize in meeting our clients  requirements for privacy, document security, control, and turnaround time. Our staffing strategies guarantee seamless transition and employee retention.. ',
    },
    {
        imgSrc: "/assets/features/signal.svg",
        heading: "Logistic Consulting Coordination",
        paragraph: 'Leveraging the USPS and other national carriers to enhance our clients external communications with their clients and members.    Areas of expertise include but are not limited to mail piece design, address list management, database conversion, hand or automated insertion of materials, addressing, and zone skipping of finished product',

    },
    {
        imgSrc: "/assets/features/dollar.svg",
        heading: "Order Fulfillment / Warehouse Management  ",
        paragraph: 'Versed in a variety of inventory management systems.  A professional staff member with extensive experience in the management of small, medium, and large operations.Dedicated to processing orders efficiently with an aggressive turn around goals. Experienced with flexible sourcing of products from inventory, third party, and just-in-time operations.',

    },  {
        imgSrc: "/assets/features/time.svg",
        heading: "Mail Consolidation & Presorting     ",
        paragraph: 'The USPS work-share program offers all of us the opportunity to both utilize the mail flow processes which make the USPS the leading Postal System in the world, while sharing in the cost benefits through the actualization of work-share program postage discounts. Falon services our clients utilize to cut cost communicating via print include',
    },
    {
        imgSrc: "/assets/features/signal.svg",
        heading: "Help Desk / End User Support",
        paragraph: 'Knowledge of providing principles and processes for providing end user support. Needs assessment, quality control, and evaluation.  Our specialist are proficient in active listening, trouble shooting, critical thinking, communication (verbal & written), instructing, active learning, and complex problem solving.',

    },
    {
        imgSrc: "/assets/features/dollar.svg",
        heading: "Business Printing   ",
        paragraph: 'Imaging, document production, convenience / high-volume copying, post-printing services, and network publishing (corporate manuals and documentation) has become the distinct market segment between copy centers and commercials printers. Falon understands the business differences of these segments and has refined a process offering the quality of the commercial printer along with the turn around time of the copy center. ',

    }
]

const Features = () => {
    return (
        <div className="bg-babyblue" id="ourServices">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">Our Services</h3>
                <h5 className="text-black opacity-60 text-lg font-normal text-center">At Falon Sourcing Solutions LLC, we take pride to provide our customers high quality services personalized for their unique needs. We are available for face to face appointments, during our business hours and and Saturdays by appointment. Our staff members are professional, courteous and efficient.
</h5>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 featureShadow'>

                            <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
                            <h3 className="text-2xl font-semibold text-black mt-5">{item.heading}</h3>
                            <h4 className='text-lg font-normal text-black opacity-50 my-2'>{item.paragraph}</h4>
                            {/* <Link href={'/'} className="text-electricblue text-xl font-medium flex gap-2 pt-10 pb-2">
                                Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                            </Link> */}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;
