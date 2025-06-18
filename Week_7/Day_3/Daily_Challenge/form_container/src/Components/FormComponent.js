const FormComponent = (props) => {
    const handleChange = (e) => {
        console.log(e.target);
        let data;
        if (e.target.type === "checkbox") {
            const checkedBoxes = document.querySelectorAll("input[name='restrictions']:checked");
            data = Array.from(checkedBoxes).map(checkbox => checkbox.value);
        }
        else {
            data = e.target.value
        }
        props[e.target.attributes.dataset.value](data);

    }
    return (
        <form method="get">
            <input type="text" name="firstName" dataset="setFirstName" placeholder="First Name" onInput={handleChange} />
            <input type="text" name="lastName" dataset="setLastName" placeholder="Last Name" onInput={handleChange} />
            <input type="text" name="age" dataset="setAge" placeholder="Age" onInput={handleChange} />

            <div>
                <input type="radio" name="gender" dataset="setGender" value='Male' onInput={handleChange} />
                <label htmlFor="gender">Male</label>
            </div>
            <div>
                <input type="radio" name="gender" dataset="setGender" value='Female' onInput={handleChange} />
                <label htmlFor="gender">Female</label>
            </div>

            <label htmlFor="">Select your destination</label>
            <select dataset="setDestination" name="destination" onInput={handleChange} required>
                <option disabled >-- Please Coose a destination --</option>
                <option value="Thailand">Thailand</option>
                <option value="Japan">Japan</option>
                <option value="Brazil">Brazil</option>
            </select>
            <label >Dietary restrictions:</label>
            <div className="restrictions">
                <div >
                    <input type="checkbox" onInput={handleChange} dataset="setRestrictions" name="restrictions" value="Nuts free" />
                    <label htmlFor="restrictions">Nuts free</label>
                </div>
                <div>
                    <input type="checkbox" onInput={handleChange} dataset="setRestrictions" name="restrictions" value="Lactose free" />
                    <label htmlFor="restrictions">Lactose free</label>
                </div>
                <div>
                    <input type="checkbox" onInput={handleChange} dataset="setRestrictions" name="restrictions" value="Vegan" />
                    <label htmlFor="restrictions">Vegan</label>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form >
    );
}

export default FormComponent;