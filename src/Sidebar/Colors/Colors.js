import Input from '../../components/Input';
import './Colors.css';

const Colors = ({hanleChange}) => {
  return (
    <div>
    <h2 className="sidebar-title color-title">Colors</h2>
    <label className='sidebar-label-container'>
    <input onChange={hanleChange} type='radio' value="" name='test' />
    <span className='checkmark all'></span>All
    </label>

    <Input
    handleChange={hanleChange}
    value="black"
    title="Black"
    name="test1"
    color="black"
    />
    <Input
    handleChange={hanleChange}
    value="blue"
    title="Blue"
    name="test1"
    color="blue"
    />
    <Input
    handleChange={hanleChange}
    value="red"
    title="Red"
    name="test1"
    color="red"
    />
    <Input
    handleChange={hanleChange}
    value="green"
    title="Green"
    name="test1"
    color="green"
    />

    <label className="sidebar-label-container">
    <input
    type="radio"
    onChange={hanleChange}
    value="white"
    name="test1"
    />
    <span
    className="checkmark"
  style={{
    background:"white",
    border:"2px solid black",
  }}
  ></span>
  white
    </label>
    
    </div>
  );
}

export default Colors;