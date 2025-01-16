import DoctorCard from '../components/DoctorCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Doctor from '../interfaces/Doctor';
export default function Services() {


    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        const loadDoctors = async () => {
            await axios.get("/src/public/doctors.json")
                .then(function (response) {
                  setDoctors(response.data.doctors)
                  setIsLoading(false);
                })
                .catch(function (error) {
                    console.log(error.message);
                });
        }
        loadDoctors();
    }, []);



    if (isLoading) {
        return <h1>loading..</h1>
    }

    return (
        <main>
            <section className="section_primary py-5" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h1 className="mb-4">Excelencia profesional</h1>
                            <p className="text-body-secondary">Nuestra clínica está comprometida con brindar un
                                servicio de calidad a
                                nuestro pacientes, es por esto, que contamos con una amplia gama de profesionales
                                capacitados y
                                dispuestos a brindar la mejor atención a cada uno de nuestros pacientes</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cards my-5" >
                <div className="container mb-5">
                    <h2 className="mb-5">Conoce a nuestro equipo de profesionales</h2>
                    <div className="row">
                        {doctors.map((doctor) => (
                            <div className='col-md-6 col-lg-3' key={doctor.id} > 
                                    <DoctorCard {...doctor} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );

}

