import Card from './components/card';
import SideBar from './components/sidebar';
import './style.scss';


const DESTINATIONS = [
  {
    name: 'Khartoum',
    description: 'sbjdk vsdkl bsd bdslk dlk sdlksdlksd lksd dslk sls',
    places: ['asfas', 'fsafasfa'],
    image: 'https://marvel-live.freetls.fastly.net/canvas/2020/9/af686165ae8d48fe9fc6f6368255688a?quality=95&fake=.png'
  },
  {
    name: 'ojpdsnvsdpovnsdp',
    description: 'sdbvosdb sod sdoi nsdonvosdjvdosvhsdpovnsdpovdsnvpos',
    places: ['fuaof', 'asfasfas', 'fasfewfwe'],
    image: 'https://marvel-live.freetls.fastly.net/canvas/2020/9/b4da41474c0640cfa0695f68cd7b353c?quality=95&fake=.png'
  },
  {
    name: 'p[wk',
    description: ' k jbsdvlsdnvsdlkvnsdlvndsop pdsojvsdp dspo nsmdpvmdsp dspdjvmsdp',
    places: ['irewghw'],
    image: 'https://marvel-live.freetls.fastly.net/canvas/2020/9/084a450bf1da47799449031d95a59bba?quality=95&fake=.png)'
  },
  {
    name: 'jopidnvsdop',
    description: 'bivusdghwoifnpavnsdpovjnsd sp  sdpodjp sdpo nsdpovnsp',
    places: ['fuaof', 'asfasfas', 'fasfewfwe'],
    image: 'https://marvel-live.freetls.fastly.net/canvas/2020/9/3a472ea6709a4eceb3e8bc385220d71a?quality=95&fake=.png)'
  },
  {
    name: 'sndoivnsdpo',
    description: 'vsdyufsuydvbsiugdfuisb vsdoivnsdiovnsdpovnsdopvnsdpovndsmvpods dspofopsndpfvs',
    places: ['powejt', 'bjaks'],
    image: 'https://marvel-live.freetls.fastly.net/canvas/2020/9/9b1e75bcc09949b0acdb1c14e3cfa9b0?quality=95&fake=.png)'
  },
  {
    name: '',
    description: 'jisdnvposd vsdpovnsdpon sdpovnsdp sdpovnsdpovnsdpo',
    places: ['iowe', 'bjaks', 'p[fjpowe'],
    image: 'https://marvel-live.freetls.fastly.net/canvas/2020/9/e891e109877d4cbfb4d3e070e825eff6?quality=95&fake=.png)'
  },
  {
    name: 'jopidnvsdop',
    description: 'bivusdghwoifnpavnsdpovjnsd sp  sdpodjp sdpo nsdpovnsp',
    places: ['fuaof', 'asfasfas', 'fasfewfwe'],
    image: 'https://marvel-live.freetls.fastly.net/canvas/2020/9/3a472ea6709a4eceb3e8bc385220d71a?quality=95&fake=.png)'
  },
  {
    name: 'sndoivnsdpo',
    description: 'vsdyufsuydvbsiugdfuisb vsdoivnsdiovnsdpovnsdopvnsdpovndsmvpods dspofopsndpfvs',
    places: ['powejt', 'bjaks'],
    image: 'https://marvel-live.freetls.fastly.net/canvas/2020/9/9b1e75bcc09949b0acdb1c14e3cfa9b0?quality=95&fake=.png)'
  },
  {
    name: '',
    description: 'jisdnvposd vsdpovnsdpon sdpovnsdp sdpovnsdpovnsdpo',
    places: ['iowe', 'bjaks', 'p[fjpowe'],
    image: 'https://marvel-live.freetls.fastly.net/canvas/2020/9/e891e109877d4cbfb4d3e070e825eff6?quality=95&fake=.png)'
  },
  {
    name: '',
    description: 'jisdnvposd vsdpovnsdpon sdpovnsdp sdpovnsdpovnsdpo',
    places: ['iowe', 'bjaks', 'p[fjpowe'],
    image: 'https://marvel-live.freetls.fastly.net/canvas/2020/9/e891e109877d4cbfb4d3e070e825eff6?quality=95&fake=.png)'
  },
  {
    name: 'jopidnvsdop',
    description: 'bivusdghwoifnpavnsdpovjnsd sp  sdpodjp sdpo nsdpovnsp',
    places: ['fuaof', 'asfasfas', 'fasfewfwe'],
    image: 'https://marvel-live.freetls.fastly.net/canvas/2020/9/3a472ea6709a4eceb3e8bc385220d71a?quality=95&fake=.png)'
  },
  {
    name: 'sndoivnsdpo',
    description: 'vsdyufsuydvbsiugdfuisb vsdoivnsdiovnsdpovnsdopvnsdpovndsmvpods dspofopsndpfvs',
    places: ['powejt', 'bjaks'],
    image: 'https://marvel-live.freetls.fastly.net/canvas/2020/9/9b1e75bcc09949b0acdb1c14e3cfa9b0?quality=95&fake=.png)'
  },
  {
    name: '',
    description: 'jisdnvposd vsdpovnsdpon sdpovnsdp sdpovnsdpovnsdpo',
    places: ['iowe', 'bjaks', 'p[fjpowe'],
    image: 'https://marvel-live.freetls.fastly.net/canvas/2020/9/e891e109877d4cbfb4d3e070e825eff6?quality=95&fake=.png)'
  }
]
const Home = (props) => {
    return (
      <div className="home-container">
          <SideBar />
          <div className="content">
            <div className="header">
              <div className="title">Discover great places to visit</div>
            </div>
            <div className="card-wrapper">
              {DESTINATIONS.map(cardInfo => {
                return <Card cardInfo={cardInfo} />
              })}
            </div>
          </div>
      </div>
    )
  }
  
  export default Home;
  