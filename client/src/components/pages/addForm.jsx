import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addForm, clearErrors } from "../../actions/formActions";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ADD_FORM_RESET } from "../../constants/formConstants";

const AddForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const { success, error } = useSelector((state) => state.review);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const formData = new FormData();
      formData.set("usage", event.target.usage.value);

      const checkboxAreas = document.querySelectorAll(
        'input[name="appGoal"]:checked'
      );
      const selectedArea = Array.from(
        checkboxAreas,
        (checkbox) => checkbox.value
      );
      formData.append("appGoal", selectedArea);
      formData.set("userExperiance", event.target.userExperiance.value);
      formData.set("improvementSuggestion", event.target.improvement.value);
      formData.set("birthDate", event.target.dob.value);
      dispatch(addForm(formData));
    }
    setValidated(true);
  };

  useEffect(() => {
    if (success) {
      toast.success("review added succesffully");
      navigate("/reviews");
      dispatch({
        type: ADD_FORM_RESET
      })
    } else if (error) {
      toast.error(error);
      dispatch(clearErrors())
    }
  })

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100 py-10 px-6 md:px-16 flex-grow">
        <form
          className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6"
          encType="application/json"
          onSubmit={handleSubmit}
          noValidate
          validated={validated}
        >
          <h1 className="text-2xl font-semibold mb-4">App Review Survey</h1>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              1. How often do you use this app?
            </label>
            <select
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              name="usage"
            >
              <option value={"Daily"}>Daily</option>
              <option value={"Weekly"}>Weekly</option>
              <option value={"Monthly"}>Monthly</option>
              <option value={"Rarely"}>Rarely</option>
              <option value={"First Time"}>First time</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              2. Main app goal?
            </label>
            <div className="grid grid-cols-2 gap-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox border border-gray-300 rounded-md text-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                  name="appGoal"
                  value={"Information"}
                />
                <span className="ml-2">Information</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox border border-gray-300 rounded-md text-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                  name="appGoal"
                  value={"Chat"}
                />
                <span className="ml-2">Chat</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox border border-gray-300 rounded-md text-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                  name="appGoal"
                  value={"Entertainment"}
                />
                <span className="ml-2">Entertainment</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox border border-gray-300 rounded-md text-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                  name="appGoal"
                  value={"Buy"}
                />
                <span className="ml-2">Buy</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox border border-gray-300 rounded-md text-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                  name="appGoal"
                  value={"Socialize"}
                />
                <span className="ml-2">Socialize</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox border border-gray-300 rounded-md text-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                  name="appGoal"
                  value={"Other"}
                />
                <span className="ml-2">Other</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              3. Rate user experience (1-10):
            </label>
            <input
              type="range"
              min="1"
              max="10"
              name="userExperiance"
              className="w-full focus:outline-none focus:ring focus:ring-blue-200"
            />
            <div className="flex justify-between mt-2">
              <span>(1) Very Bad</span>
              <span>(10) Perfect</span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              4. Suggest any improvements:
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              rows="4"
              name="improvement"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">
              5. Enter your birthday:
            </label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              name="dob"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default AddForm;
