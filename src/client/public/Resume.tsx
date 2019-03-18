import * as React from 'react';

export interface IResumeProps { }

export interface IResumeState { }

export default class IResume extends React.Component<IResumeProps, IResumeState> {
    constructor(props: IResumeProps) {
        super(props);
    }
    render() {
        return (
            <div className="zinc fade-in">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <header>
                                <h1 className="d-flex justify-content-center">Blake Reeves</h1>
                                <p className="d-flex justify-content-center">5023 Morning Dove Ln, Spring Hill, TN | 731-845-9310 | blake.reeves19@gmail.com</p>
                            </header>
                        </div>
                        <div className="col-sm-12">
                            <h4 className="border border-dark border-top-0 border-left-0 border-right-0">Professional Profile</h4>
                            <p>Enthusiastic developer with experience in software development and client relations who is dedicated to succeeding at the task at hand.</p>
                            <ul>
                                <li>Quick learner with comprehensive knowledge of coding languages as well as Microsoft Office, Mac OS, and Outlook</li>
                                <li>Proven hard worker with a drive for excellence, as shown through success in studies and with Terminix</li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <h4 className="border border-dark border-top-0 border-left-0 border-right-0">Education</h4>
                            <div className="font-italic d-flex justify-content-between">
                                <p><span className="font-weight-bold">Covalence,</span> Full Stack Developer Certification</p>
                                <p>March 2019</p>
                            </div>
                            <div className="font-italic d-flex justify-content-between">
                                <p><span className="font-weight-bold">Union University,</span> B.A. in Biblical Studies & Languages, Minor in History</p>
                                <p>May 2018</p>
                            </div>
                            <div className="font-italic">
                                <p>Awards: Dean’s List (2014, 2015), Presidents List (2016, 2017)</p>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <h4 className="border border-dark border-top-0 border-left-0 border-right-0">Skills</h4>
                            <ul>
                                <li>Languages - HTML5 | CSS3 | JavaScript (ES5/ES6)</li>
                                <li>Libraries - Bootstrap | Sass | jQuery | ReactJs | React Native</li>
                                <li>3rd party APIs - Stripe | Mailgun</li>
                                <li>Others - NodeJS | Express | TypeScript | MySQL | MySQL Workbench | Heroku | GitHub | CLI | Basic Scrum</li>
                                <li>Authentication process on front-end and back-end</li>
                                <li>Microsoft Word and PowerPoint, Pages, and Keynote Windows OS and Mac</li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <h4 className="border border-dark border-top-0 border-left-0 border-right-0">Work Experience</h4>
                            <p className="font-weight-bold">Terminix</p>
                            <div className="font-italic justify-content-between">
                                <p>Pest Control Technician</p>
                                <p>May 2018-December 2018</p>
                            </div>
                            <p>Performed regular pest control services for customers on assigned route. Managed and communicated with 500+ customers to ensure satisfaction.</p>
                            <ul>
                                <li>Earned 100% in satisfaction ratings from customer surveys by managing customer expectations and providing excellent customer service</li>
                                <li>Achieved highest department sales for November and December</li>
                                <li>Solved problems for customers, assessing individual situations and providing appropriate solutions</li>
                            </ul>
                            <p className="font-weight-bold">O'Charley's</p>
                            <div className="font-italic justify-content-between">
                                <p>Host</p>
                                <p>December 2017-March 2018</p>
                            </div>
                            <p>Welcomed all guests, seating incoming guests and helping to clean tables.</p>
                            <ul>
                                <li>Multi-tasked and provided help to colleagues during busy peak hours</li>
                                <li>Delivered excellent customer service by attending to their concerns and providing a pleasant experience</li>
                                <li>Created effective seating charts to keep customers and servers happy, making certain to place guests according to number of people in the party</li>
                            </ul>
                            <p className="font-weight-bold">Casey Jones Village</p>
                            <div className="font-italic justify-content-between">
                                <p>Barista</p>
                                <p>May 2016-August 2016</p>
                            </div>
                            <p>Fulfilled customer drink orders, made a variety of coffee drinks, and ensured high-quality customer service.</p>
                        </div>
                        <div className="col-sm-12">
                            <h4 className="border border-dark border-top-0 border-left-0 border-right-0">Volunteer Experience</h4>
                            <p className="font-weight-bold">Mob Squad (Union University)</p>
                            <div className="font-italic justify-content-between">
                                <p>Event Planner</p>
                                <p>2017</p>
                            </div>
                            <p>Planned events for university mission trips.</p>
                            <ul>
                                <li>Organized promotional events, including materials, speakers, food, Q&A sessions, and performances</li>
                                <li>Collaborated with entire events team to delegate tasks and lead successful events</li>
                            </ul>
                            <p className="font-weight-bold">Go Trip (Union University)</p>
                            <div className="font-italic justify-content-between">
                                <p>Mission Trip Participant</p>
                                <p>2016</p>
                            </div>
                            <p>Assisted with the North American Mission Board (NAMB) at the University of Connecticut.</p>
                            <ul>
                                <li>Organized events and distributed promotional materials on campus</li>
                                <li>Helped with church needs, participating in events and get-togethers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}