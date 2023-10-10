import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllForms } from "../../actions/formActions";
import formatISODate from "../../utils/formatIsoDate";
import { Link } from "react-router-dom";


const FormList = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(getAllForms());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto p-6 relative flex-grow">
          <h1 className="text-3xl font-semibold mb-6">App Reviews</h1>
          <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <Link to={"/"}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md absolute top-4 right-4">
                Add
              </button>
            </Link>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-blue-600">Usage</th>
                  <th className="px-6 py-3 text-left text-blue-600">
                    Main App Goal
                  </th>
                  <th className="px-6 py-3 text-left text-blue-600">Rating</th>
                  <th className="px-6 py-3 text-left text-blue-600">
                    Suggestions
                  </th>
                  <th className="px-6 py-3 text-left text-blue-600">DOB</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.id} className="hover:bg-gray-100">
                    <td className="px-6 py-4">{review.usage}</td>
                    <td className="px-6 py-4">{review.appGoal}</td>
                    <td className="px-6 py-4">{review.userExperiance}</td>
                    <td className="px-6 py-4">
                      {review.improvementSuggestion}
                    </td>
                    <td className="px-6 py-4">
                      {formatISODate(review.birthDate)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormList;
