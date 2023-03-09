import "./dropDown.css";
import { useState} from "react";



export const DropDown = () => {

    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    const [itemsList, setItemList] = useState([
        {
            name: "Русский",
            value: "RU"
        },
        {
            name: "Uzbek",
            value: "UZ"
        }
    ]);

    const [selectedItemIndex, setSelectedItemIndex] = useState(null);


  return (
    <div className='dropdown'>
        <div className="dropdown-selection" onClick={e => {
            setIsDropDownVisible(!isDropDownVisible);
        }}>
            {selectedItemIndex !== null ? itemsList[selectedItemIndex].value : "RU"}

            <i class="bi bi-chevron-down"></i>
        </div>

        {
            isDropDownVisible ? (
                <div className="items-holder">
                {
                    itemsList.map((item, index) => {
                        return (
                            <div key={item.value} className="dropdown-item" onClick={e => {
                                setSelectedItemIndex(index);
                                setIsDropDownVisible(false);
                            }}>
                                {item.name}
                            </div>
                        )
                    })
                }
                </div>
            ) : <></>
        }
    </div>
  )
}