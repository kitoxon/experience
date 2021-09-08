import GroupProfileRight from "../../component/group/groupprofile/groupprofileright"
import './css/GroupPage.css'
import GroupHeader from "../../component/group/GroupHeader"
import Masonry from 'react-masonry-css'
import Post from "../../component/home/Post"
import './css/GroupProfilePage.css'
import RoundedButton from "../../component/buttons/general/RoundedButton"
import Select, { components } from 'react-select';

function GroupProfilePage() {
      const images = [
        "https://images.unsplash.com/photo-1627474456207-efcb21e79def?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1606788075765-42f69501a452?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1627474457263-d7f14df58dcb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
        "https://images.unsplash.com/photo-1627531732547-e16087354233?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1627563178411-a90110bb64b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1627883749168-c2c8f0b9c5c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      ]
    const items = images.map((item, i) => {
        return (
            <div key={i}>
                <Post image={images[i]}/>
            </div>
        )
    });
    const options = [
        { value: 'public', label: 'Постууд', icon: "far fa-clone" },
        { value: 'private', label: 'Группууд', icon: "fas fa-user-plus" }
    ];
    const { Option } = components;
    const IconOption = props => (
        <Option {...props}>
          <i className={props.data.icon} alt={props.data.label}/>
          {props.data.label}
        </Option>
    );

    const customStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white', font: 'normal normal 500 20px/24px Montserrat', color: '#000' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            
            ...styles,
            width: '80%',
            backgroundColor: isDisabled
              ? null
                : isFocused
                    ? "#F6F6F6"
                    : "white",
            font: "normal normal 500 20px/24px Montserrat",
            color: isDisabled
              ? '#ccc'
              : 'black',
            cursor: isDisabled ? 'not-allowed' : 'default',
            ':active': {
              ...styles[':active'],
              backgroundColor:
                !isDisabled && (isSelected ? data.color : 'white'),
            },
          };
        },
    };
    return(
        <div className="groupProfilePageDiv">
            <GroupHeader leavebutton={<RoundedButton content="Гарах"/>}/>
            <div className="groupProfilePage">
                <div className="leftside">
                    <div className="dropdown-selection">
                        <Select 
                            styles={customStyles}
                            defaultValue={options[0]}
                            options={options}
                            components={{ Option: IconOption, SingleValue: IconOption }}
                            isSearchable={false}
                            />
                        <i className="fas fa-search"></i>
                    </div>
                    <Masonry
                        breakpointCols='2'
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {items}
                    </Masonry>
                </div>
                <div className="rightside">
                    <GroupProfileRight/>
                </div>
            </div>
        </div>
    )
}
export default GroupProfilePage