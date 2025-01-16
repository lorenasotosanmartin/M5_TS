import Card from 'react-bootstrap/Card';
import Doctor from '../classes/Doctor';

export default function DoctorCard(doctor: Doctor) {

  return (
    <>
      <Card className="p-0" >
        <Card.Img variant="top" src={doctor.imagen} />
        <Card.Body>
          <Card.Title>{doctor.nombre}</Card.Title>
          <Card.Title className='fst-italic'>{doctor.especialidad}</Card.Title>
          <Card.Text>
            {doctor.descripcion}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
