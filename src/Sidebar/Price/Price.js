import Input from '../../components/Input';

import './Price.css'

const Price = ({hanleChange}) => {
  return <div className='ml'>
  <h2 className='sidebar-title price-title'>Price</h2>

  <label className='sidebar-label-container'>
  <input onChange={hanleChange} type='radio' value="" name='test' />
  <span className='checkmark'></span>All
  </label>

  <Input
  handleChange={hanleChange}
  value={50}
   title="$50-100"
    name="test2"
    />
    
  <Input
  handleChange={hanleChange}
  value={150}
   title="$100-150"
    name="test2"
    />
    
  <Input
  handleChange={hanleChange}
  value={200}
   title="over$150"
    name="test2"
    />
    
  
  </div>
  
};

export default Price;