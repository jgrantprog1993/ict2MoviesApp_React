import React from "react";  // useState/useEffect redundant 
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));
  const genders = {
    genders:[
      {
        "id": 0,
        "name": "ALL"
      },
      {
        "id": 2,
        "name": "Male"
      },
      {
        "id": 1,
        "name": "Female"
      },
    ]
  }
export default function FilterActorsCard(props) {
  const classes = useStyles();
  
  console.log('genders - ')
  console.log(genders)

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenderChange = (e) => {
    handleChange(e, "gender", e.target.value);
  };

  
  return (
    <>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Actors
        </Typography>
        <TextField
            className={classes.formControl}
            id="filled-search"
            label="Search field"
            type="search"
            value={props.titleFilter}
            variant="filled"
            onChange={handleTextChange}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="gender-label">Gender</InputLabel>
            <Select
                labelId="gender-label"
                id="gender-select"
                value={props.genderFilter}
                onChange={handleGenderChange}
            >
            {genders.genders.map((gender) => {
              return (
                <MenuItem key={gender.id} value={gender.id}>
                  {gender.name}
                </MenuItem>
              );
              
            })}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
    <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            Sort the Actors
          </Typography>
        </CardContent>
      </Card>
      </>
  );
}