import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function SearchBar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  function handleChange(e) {
    setImageName(e.currentTarget.value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (imageName.trim() === '') {
      return Notify.info('Enter image name');
    }
    onSubmit({ imageName });
    setImageName('');
    e.currentTarget.reset();
  }

  return (
    <header className="SearchBar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchFormButton">
          <AiOutlineSearch size="30" />
        </button>

        <input
          className="SearchFormInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

// export default class SearchBar extends Component {
//   state = {
//     imageName: '',
//   };

// handleChange = e => {
//   this.setState({ imageName: e.currentTarget.value.toLowerCase() });
// };

// handleSubmit = e => {
//   e.preventDefault();
//   if (this.state.imageName.trim() === '') {
//     return Notify.info('Enter image name');
//   }
//   this.props.onSubmit({ ...this.state });
//   this.setState({ imageName: '' });
//   e.currentTarget.reset();
// };

//   render() {
// return (
//   <header className="SearchBar">
//     <form className="SearchForm" onSubmit={this.handleSubmit}>
//       <button type="submit" className="SearchFormButton">
//         <AiOutlineSearch size="30" />
//       </button>

//       <input
//         className="SearchFormInput"
//         type="text"
//         autoComplete="off"
//         autoFocus
//         placeholder="Search images and photos"
//         onChange={this.handleChange}
//       />
//     </form>
//   </header>
// );
//   }
// }

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
