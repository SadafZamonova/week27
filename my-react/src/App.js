import Tarif from './components/tariff';
import './App.css';



let tarifs = [
  {
    name: 'Безлимитный 300',
    price:'300 руб/мес',
    speed:'до 10 Мбит/сек',
    description:'Объем включенного трафика не ограничен',
    id: 0,
  },
  {
    name: 'Безлимитный 450',
    price:'450 руб/мес',
    speed:'до 50 Мбит/сек',
    description:'Объем включенного трафика не ограничен',
    id: 1
  },
  {
    name: 'Безлимитный 550',
    price:'550 руб/мес',
    speed:'до 100 Мбит/сек',
    description:'Объем включенного трафика не ограничен',
    id: 2
  },
  {
    name: 'Безлимитный 1000',
    price:'1000 руб/мес',
    speed:'до 200 Мбит/сек',
    description:'Объем включенного трафика не ограничен',
    id: 3
  },

]
function App() {
  return (
    <div className="App">
      <h1 className="tarif"> Тарифы
      </h1>
<div className='tarif-card'>
      {tarifs.map((tarif) => <Tarif item = {tarif}/>
      )}
      </div>
    </div>
  );
}

export default App;
