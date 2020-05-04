import formstyles from '../FormElements/FormElements.module.scss'
import styles from './Input.module.scss'

const Input = ({ label, type='text', placeholder, error='', handleChange, required=false }) => (
    <>
        <label className={styles.label, formstyles.labelForm} >
            {label}
            <input type={type} className="form-control" placeholder={placeholder} onChange={handleChange} required={required} />
        </label>
        <div className="invalid-feedback" >{error}</div>
    </>
)


export default Input