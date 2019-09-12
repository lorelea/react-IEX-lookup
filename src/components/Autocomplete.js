import React from "react";
import "./Autocomplete.scss";

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      query: "" // this.props.value || ""
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value !== this.state.query) {
      // console.log(`newProps.value: ${newProps.value}`);
      this.setState({ query: newProps.value });
    }
  }

  componentDidMount() {
    this.search.parentNode.addEventListener("keydown", this.handleKeyDown);
    // window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    this.search.parentNode.removeEventListener("keydown", this.handleKeyDown);
    // window.removeEventListener('scroll', this.handleScroll);
  }

  handleKeyDown = event => {
    const activeListElement =
      this.search.parentNode.querySelector(".active") ||
      this.search.parentNode.querySelector("li:first-child");

    switch (event.keyCode) {
      case 13: // enter
        this.handleSuggestionSelected(activeListElement.innerText);
        break;
      case 38: // up
        if (activeListElement.previousSibling) {
          activeListElement.classList.remove("active");
          activeListElement.previousSibling.classList.add("active");
        }
        break;
      case 40: // down
        if (activeListElement.nextSibling) {
          activeListElement.classList.remove("active");
          activeListElement.nextSibling.classList.add("active");
        }
        break;
      default:
        break;
    }
  };

  handleInputChange = event => {
    const { items } = this.props;
    const query = event.target.value;
    let suggestions = [];
    if (query.length) {
      const regex = new RegExp(`^${query}`, "i");
      suggestions = items.sort().filter(item => regex.test(item));
    }
    this.setState({ suggestions, query });
  };

  handleClearClick = () => {
    this.setState({ query: "" });
    this.search.focus();
  };

  handleSuggestionSelected = value => {
    this.setState(
      {
        suggestions: [],
        query: value
      },
      () => {
        this.props.onValueUpdated && this.props.onValueUpdated(value);
      }
    );
  };

  renderFilteredSuggestions() {
    const { suggestions } = this.state;
    const activeValue = this.props.value;
    if (!suggestions.length) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item, index) => (
          <li
            className={item === activeValue ? "active" : ""}
            key={item + index}
            onClick={() => this.handleSuggestionSelected(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className={"my-autocomplete " + this.props.className}>
        <input
          type="text"
          ref={input => (this.search = input)}
          placeholder={this.props.placeholder}
          value={this.state.query}
          onChange={this.handleInputChange}
        />
        {this.state.query && (
          <span className="clearable" onClick={this.handleClearClick}></span>
        )}
        {this.renderFilteredSuggestions()}
      </div>
    );
  }
}

export default Autocomplete;
