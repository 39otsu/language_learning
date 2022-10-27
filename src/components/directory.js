import { useState, useEffect } from 'react'
import { useLocation,  useSearchParams } from 'react-router-dom';
import { 
	Box, Button, InputLabel,
	MenuItem, FormControl, Select
 } from '@mui/material';
import Tile from './tile';

export default function Directory() {
	
	const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  const [pageQuery, setPageQuery] = useState(searchParams.get('page'));

	const [count, setCount] = useState(0);
	const [page, setPage] = useState(initVal(pageQuery)); // page number relative to rank
	const [results, setResults] = useState([]); // results from db
	
	useEffect(() => {
		fetch(process.env.REACT_APP_SERVER + '/dir/'+ (100 * page).toString()).then((r) => {
			r.json().then((res) => {
				setResults(res.result);
			})
		})
		fetch(process.env.REACT_APP_SERVER + '/count').then((r) => {
			r.json().then((res) => {
				setCount(res.entries);
			}) 
		})
	},[])

	// function to initialize page and position vars
	function initVal(str) {
		var value = 0;
		if (typeof str != 'number') {
			var parsed = (str != null) ? parseInt(str) : str; // parse the query string, if NOT number it will be null
			value = (parsed != null)? parseInt(str) : 0; // if null, set to zero. 
		}else {
			value = str;
		}
		return value; // initialize with value
	}

	function handleSelect(e) {
		setPage(e.target.value);
		setSearchParams({'page': e.target.value});
		fetch(process.env.REACT_APP_SERVER + '/dir/'+ (100 * e.target.value).toString()).then((r) => {
			r.json().then((res) => {
				setResults(res.result);
			})
		})
	}

	function calculatePrev() {
		return (page === 0) ? 0 : page - 1;
	}

	function generateMenuItems() {
		var arr = []
		for (var i = 0; i < (count / 100); i++) {
			arr.push(i);
		}
		return arr;
	}

	return(
		<Box  
			sx={{display: 'flex', gap: '5px', width: '100vw'}}
			alignItems='center'
			justifyContent='center'
			flexDirection='column'
		>
			<Box
				sx={{display: 'flex', width: 'auto', padding: '10px', maxWidth: '60rem', gap: '5px'}}
				justifyContent='center'
				flexDirection='row'
				flexWrap='wrap'
			>
				<Button href={'/directory?page=' + calculatePrev()} sx={{textAlign: 'left'}} variant="contained" id='prev-btn' disabled={(page === 0)}>Prev</Button>
				<Button href={'/directory?page=' + (page+1)} sx={{textAlign: 'left'}} variant="contained" id='next-btn' disabled={(page === (count / 100))}>Next</Button>
				<FormControl fullWidth variant="filled">
					<InputLabel id="demo-simple-select-label">Go to page</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={page}
						label="Page"
						onChange={handleSelect}
					>
						{generateMenuItems().map((e,i) => (
							<MenuItem value={e}>{e + 1}</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
			<Box
				sx={{display: 'flex', maxWidth: '60rem'}}
				justifyContent='center'
				flexDirection='row'
				flexWrap='wrap'
			>
				{results.map((e,i) => (
					<Box>
						<Tile rank={e.rank} phrase={e.phrase}/>
					</Box>
				))}
			</Box>
		</Box>
	)
}