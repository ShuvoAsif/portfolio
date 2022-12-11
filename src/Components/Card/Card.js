import React from 'react';

const Card = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-sky-100 text-center pt-5'>My Projects</h1>
            <div className='grid my-9 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5'>
                <div className="card w-96 bg-blue-900 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Mobile Bazar</h2>
                        <p>It's a mobile resale website where people can buy and sale used website</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href="https://mobile-resale-dfa9a.web.app/" target="_blank" rel="noopener noreferrer">View Site</a></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-blue-900 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Visa Consultant</h2>
                        <p>It's a visa consultant website.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href="https://pro-visa-consultant.web.app/" target="_blank" rel="noopener noreferrer">View Site</a></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-blue-900 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Course Academy</h2>
                        <p>It's a e-learning website and people can learn coueses and take quiz</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href="https://course-academy-73981.web.app" target="_blank" rel="noopener noreferrer">View Site</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;