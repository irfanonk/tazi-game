import React from "react";

export default function PlayListTable({ games }) {
  const tableHeaders = [
    "event",
    "location",
    "class",
    "distance",
    "date",
    "prizepool",
    "action",
  ];
  return (
    <div className="play-list-table text-center  text-blur-10 overflow-auto ">
      <table className="w-full table-auto">
        <thead>
          <tr>
            {tableHeaders.map((item, index) => (
              <th className="px-4 py-2 uppercase" key={index}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {games.map((item, index) => (
            <tr key={index} className="text-md ">
              <td className="play-list-table-column border-b-4 border-transparent px-4 py-2 ">
                <div className="play-list-table-column-item">
                  {"Race #" + item.event * 1000}
                </div>
              </td>
              <td className="play-list-table-column border-b-4 border-transparent px-4 py-2 ">
                <div className="play-list-table-column-item">
                  {item.location}
                </div>
              </td>
              <td className="play-list-table-column border-b-4 border-transparent px-4 py-2 ">
                <div className="play-list-table-column-item">{item.class}</div>
              </td>
              <td className="play-list-table-column border-b-4 border-transparent px-4 py-2 ">
                <div className="play-list-table-column-item">
                  {item.distance}
                </div>
              </td>
              <td className="play-list-table-column border-b-4 border-transparent  px-4 py-2 ">
                <div className="play-list-table-column-item">
                  {new Date(item.date).toLocaleDateString("en-US")}
                </div>
              </td>
              <td className="play-list-table-column text-yellow gap-x-2 border-b-4 border-transparent px-4 py-2 ">
                <div className="flex justify-center items-center gap-x-4 play-list-table-column-item">
                  <svg
                    id="coin"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <circle
                      id="Ellipse_11050"
                      data-name="Ellipse 11050"
                      cx="12.372"
                      cy="12.372"
                      r="12.372"
                      transform="translate(0 0.256)"
                      fill="#fabe2c"
                    />
                    <path
                      id="Path_3960"
                      data-name="Path 3960"
                      d="M268.5,12.5A12.535,12.535,0,0,0,256,0V25A12.535,12.535,0,0,0,268.5,12.5Z"
                      transform="translate(-243.5)"
                      fill="#ff9100"
                    />
                    <circle
                      id="Ellipse_11051"
                      data-name="Ellipse 11051"
                      cx="9.578"
                      cy="9.578"
                      r="9.578"
                      transform="translate(3.193 2.651)"
                      fill="#fed843"
                    />
                    <path
                      id="Path_3961"
                      data-name="Path 3961"
                      d="M265.522,70.522A9.533,9.533,0,0,0,256,61V80.043A9.533,9.533,0,0,0,265.522,70.522Z"
                      transform="translate(-243.5 -58.021)"
                      fill="#fabe2c"
                    />
                    <path
                      id="Path_3962"
                      data-name="Path 3962"
                      d="M139.45,126.2a.733.733,0,0,0-.592-.5l-3.469-.5-1.552-3.144a.762.762,0,0,0-1.313,0l-1.552,3.144-3.469.5a.732.732,0,0,0-.406,1.249l2.511,2.448-.592,3.455a.732.732,0,0,0,1.062.772l3.1-1.631,3.1,1.631a.732.732,0,0,0,1.062-.772l-.593-3.455,2.511-2.448A.733.733,0,0,0,139.45,126.2Z"
                      transform="translate(-120.681 -115.733)"
                      fill="#fabe2c"
                    />
                    <path
                      id="Path_3963"
                      data-name="Path 3963"
                      d="M259.876,133.565a.732.732,0,0,0,.291-.716l-.593-3.455,2.511-2.448a.732.732,0,0,0-.406-1.249l-3.469-.5-1.552-3.144a.715.715,0,0,0-.657-.375V131.99l3.1,1.631A.728.728,0,0,0,259.876,133.565Z"
                      transform="translate(-243.501 -115.733)"
                      fill="#ff9100"
                    />
                  </svg>
                  <div>{item.prizepool}</div>
                </div>
              </td>
              <td className="play-list-table-column  border-b-4 border-transparent px-4 py-2 ">
                <div className="flex justify-center items-center gap-x-6 play-list-table-column-item">
                  <svg
                    id="play-button-arrowhead"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.014"
                    height="21.102"
                    viewBox="0 0 19.014 21.102"
                  >
                    <path
                      id="Path_3965"
                      data-name="Path 3965"
                      d="M11.552.465c-1.9-1.091-3.445-.2-3.445,2V18.64c0,2.195,1.542,3.087,3.445,2l14.141-8.11c1.9-1.092,1.9-2.86,0-3.952Z"
                      transform="translate(-8.107 0)"
                      fill="#2feef6"
                    />
                  </svg>
                  <svg
                    id="share"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.283"
                    height="23.283"
                    viewBox="0 0 23.283 23.283"
                  >
                    <g
                      id="Group_2875"
                      data-name="Group 2875"
                      transform="translate(0 0)"
                    >
                      <path
                        id="Path_3964"
                        data-name="Path 3964"
                        d="M17.462,11.641a5.8,5.8,0,0,0-4.375,1.989L9.393,11.357a4.556,4.556,0,0,0,.171-2.762l4.911-2.266a3.86,3.86,0,1,0-.893-2.448,3.975,3.975,0,0,0,.069.691L8.745,6.835a4.85,4.85,0,1,0-.367,6.176l3.689,2.27a5.819,5.819,0,1,0,5.394-3.64Z"
                        transform="translate(0 0)"
                        fill="#2feef6"
                      />
                    </g>
                  </svg>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // <table className="text-white text-blur-6 table-auto">
    //   <thead>
    //     <tr className="text-sm">
    //       {tableHeaders.map((item, index) => (
    //         <th className=" uppercase" key={index}>
    //           {item}
    //         </th>
    //       ))}
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {games.map((item, index) => (
    //       <tr key={index} className="bg-bgblue text-md ">
    //         <td>{"#" + item.event * 1000}</td>
    //         <td>{item.location}</td>
    //         <td>{item.class}</td>
    //         <td>{item.distance}</td>
    //         <td>{new Date(item.date).toLocaleDateString("en-US")}</td>
    //         <td className="flex items-center text-yellow gap-x-2">
    //           <svg
    //             id="coin"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="25"
    //             height="25"
    //             viewBox="0 0 25 25"
    //           >
    //             <circle
    //               id="Ellipse_11050"
    //               data-name="Ellipse 11050"
    //               cx="12.372"
    //               cy="12.372"
    //               r="12.372"
    //               transform="translate(0 0.256)"
    //               fill="#fabe2c"
    //             />
    //             <path
    //               id="Path_3960"
    //               data-name="Path 3960"
    //               d="M268.5,12.5A12.535,12.535,0,0,0,256,0V25A12.535,12.535,0,0,0,268.5,12.5Z"
    //               transform="translate(-243.5)"
    //               fill="#ff9100"
    //             />
    //             <circle
    //               id="Ellipse_11051"
    //               data-name="Ellipse 11051"
    //               cx="9.578"
    //               cy="9.578"
    //               r="9.578"
    //               transform="translate(3.193 2.651)"
    //               fill="#fed843"
    //             />
    //             <path
    //               id="Path_3961"
    //               data-name="Path 3961"
    //               d="M265.522,70.522A9.533,9.533,0,0,0,256,61V80.043A9.533,9.533,0,0,0,265.522,70.522Z"
    //               transform="translate(-243.5 -58.021)"
    //               fill="#fabe2c"
    //             />
    //             <path
    //               id="Path_3962"
    //               data-name="Path 3962"
    //               d="M139.45,126.2a.733.733,0,0,0-.592-.5l-3.469-.5-1.552-3.144a.762.762,0,0,0-1.313,0l-1.552,3.144-3.469.5a.732.732,0,0,0-.406,1.249l2.511,2.448-.592,3.455a.732.732,0,0,0,1.062.772l3.1-1.631,3.1,1.631a.732.732,0,0,0,1.062-.772l-.593-3.455,2.511-2.448A.733.733,0,0,0,139.45,126.2Z"
    //               transform="translate(-120.681 -115.733)"
    //               fill="#fabe2c"
    //             />
    //             <path
    //               id="Path_3963"
    //               data-name="Path 3963"
    //               d="M259.876,133.565a.732.732,0,0,0,.291-.716l-.593-3.455,2.511-2.448a.732.732,0,0,0-.406-1.249l-3.469-.5-1.552-3.144a.715.715,0,0,0-.657-.375V131.99l3.1,1.631A.728.728,0,0,0,259.876,133.565Z"
    //               transform="translate(-243.501 -115.733)"
    //               fill="#ff9100"
    //             />
    //           </svg>

    //           {item.prizepool}
    //         </td>
    //         <td className=" gap-x-8 items-center justify">
    //           <svg
    //             id="play-button-arrowhead"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="19.014"
    //             height="21.102"
    //             viewBox="0 0 19.014 21.102"
    //           >
    //             <path
    //               id="Path_3965"
    //               data-name="Path 3965"
    //               d="M11.552.465c-1.9-1.091-3.445-.2-3.445,2V18.64c0,2.195,1.542,3.087,3.445,2l14.141-8.11c1.9-1.092,1.9-2.86,0-3.952Z"
    //               transform="translate(-8.107 0)"
    //               fill="#2feef6"
    //             />
    //           </svg>
    //           <svg
    //             id="share"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="23.283"
    //             height="23.283"
    //             viewBox="0 0 23.283 23.283"
    //           >
    //             <g
    //               id="Group_2875"
    //               data-name="Group 2875"
    //               transform="translate(0 0)"
    //             >
    //               <path
    //                 id="Path_3964"
    //                 data-name="Path 3964"
    //                 d="M17.462,11.641a5.8,5.8,0,0,0-4.375,1.989L9.393,11.357a4.556,4.556,0,0,0,.171-2.762l4.911-2.266a3.86,3.86,0,1,0-.893-2.448,3.975,3.975,0,0,0,.069.691L8.745,6.835a4.85,4.85,0,1,0-.367,6.176l3.689,2.27a5.819,5.819,0,1,0,5.394-3.64Z"
    //                 transform="translate(0 0)"
    //                 fill="#2feef6"
    //               />
    //             </g>
    //           </svg>
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
}
