import Layout from '../components/Layout';
import Link from 'next/link';
import { skills, experiences, projects } from '../profile';

const Index = () => (
  <Layout>
    {/**HEADER CARD */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-dark">
          <div className="row">
            <div className="col-md-4">
              <img src="photo.png" alt="" className="img-fluid"/>
            </div>
            <div className="col-md-8">
              <h2>Manuel Teran</h2>
              <h3>Developer in process </h3>
              <p>Me especializo en desarrollar sitios web como Front-End, estructura y diseño del sitio,
                  conocimientos sobre HTML, Bootstrap, CSS, PHP. Actualmente estoy aprendiendo Nextjs, Firebase y MongoDB</p>
               {/** <a href="/hireme">Contratame</a> */}
            </div>
          </div>
        </div>
      </div>
    </header>
    {/** Second section*/}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h3>Habilidades</h3>
              {
                skills.map(({skill, percentage}, i) => (
                  <div className="py-3" key={i}>
                      <h5>{skill}</h5>
                        <div className="progress">
                          <div className="progress-bar progress-bar-striped progress-bar-animated"
                           role="progressbar"
                            style={{width: `${percentage}%`}}
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            >{percentage} %</div>
                        </div>
                  </div>
                ))
              }
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h3>Experiencia</h3>

            <ul>
              {
                experiences.map(({title, description, from, to}, index) => (
                  <li key={index}>
                  <h3>{title}</h3>
                  <h5>{from}-{to}</h5>
                  <p>
                    {description}
                  </p>
                 </li>
                ))
              }
            </ul>

            {/** <Link href="/experiences">
              <a className="btn btn-light">
                Conoce mas
              </a>
            </Link> */}


          </div>
        </div>
      </div>
    </div>
  
  {/**Portafolio */}
  <div className="row">
    <div className="col-md-12">
      <div className="card card-body bg-secondary text-dark">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center">Portafolio</h2>
          </div>

              {
                projects.map(({name, description, image, URL}, i) => (
                  
                    <div className="col-md-4 p-2" key={i}>
                      
                      <div className="card h-100">
                        <div className="overflow">
                          <img src={`/${image}`} alt="" className="card-img-top"/>
                          <div className="capa">{name}</div>
                        </div>
                          <div className="card-body">
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <a href={URL} target="_blank">Ir al sitio</a>
                          </div>
                      </div>
                     
                    </div>
                  
                ))
              }
        </div>

        <div className="text-center mt-4">
          <Link href="/portafolio">
            <a className="btn btn-outline-light">Mas proyectos</a>
          </Link>
        </div>

      </div>


    </div>
  </div>
  

  
  </Layout>



)

export default Index;