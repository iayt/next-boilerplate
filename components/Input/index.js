import formstyles from '../FormElements/FormElements.module.scss'
import styles from './Input.module.scss'

const Input = ({ label, type='text', uniqueId, placeholder, value='', error='', required=false }) => (
    <>
        <label className={styles.label, formstyles.labelForm} >
            {label}
            <input type={type} className="form-control" id={uniqueId} placeholder={placeholder} required={required} />
        </label>
        <div className="invalid-feedback" >{error}</div>
    </>
)


export default Input