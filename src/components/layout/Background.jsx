import Dots from '../../assets/icons/dots.png';
import eclipse1Url from '../../assets/images/Ellipse1.png';
import eclipse2Url from '../../assets/images/Ellipse2.png';

export default function Background() {
  return (
    <>
      {/* Ellipse 1 */}
      <div 
        className="absolute pointer-events-none"
        style={{
          width: '888px',
          height: '888px',
          top: '-268px',
          right: '-200px',
          overflow: 'visible',
        }}
      >
        <img 
          src={eclipse1Url} 
          alt="Radial azul 1" 
          className="w-full h-full object-contain" 
        />
      </div>

      {/* Ellipse 2 */}
      <div 
        className="absolute pointer-events-none"
        style={{
          width: '674px',
          height: '674px',
          bottom: '-100px',
          left: '-215px',
          overflow: 'visible',
        }}
      >
        <img 
          src={eclipse2Url} 
          alt="Radial azul 2" 
          className="w-full h-full object-contain" 
        />
      </div>

      {/* Bolinhas */}
      <div className="absolute top-7 left-[71px] opacity-50 pointer-events-none">
        <img src={Dots} alt="Padrão de bolinhas" />
      </div>
    </>
  );
}