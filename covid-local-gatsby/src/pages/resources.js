import React from 'react';
import { Helmet } from 'react-helmet';
import Fuse from 'fuse.js';

import Layout from '../components/Layout/Layout';
import DropdownGroup from '../components/DropdownGroup/DropdownGroup';
import Dropdown from '../components/DropdownGroup/Dropdown/Dropdown';

import styles from '../styles/resources.module.scss';

import resourcesContents from '../resources/resourcesContents';


const imgpath = "/assets/images/resources/";

// non-filterable columns
const infoColumns = ['name', 'description', 'image', 'link', 'organization']

// Identify all filterable columns
const filterColumns = [...new Set(resourcesContents.map(
  resource => Object.keys(resource)).flat()
)].filter(column => !infoColumns.includes(column))

// Identify unique values in each filterable column
const filterOptions = filterColumns.map(
  column => ({
    column: column, 
    options: [
      ...new Set(resourcesContents.map(
        resource => resource[column]
          .split(';')
          .map(s => s.trim())
      ).flat())
    ],
  }))

// Create object for each column,
// containing each filter
const filterSetup = {}
filterOptions.forEach(filter => {
  filterSetup[filter.column] = {};

  filter.options.forEach(string => {
    filterSetup[filter.column][string] = false;
  })
})



const Resources = props => {
  const [searchString, setSearchString] = React.useState('');
  const [filters, setFilters] = React.useState(filterSetup)


  const searchOptions = {
    isCaseSensitive: false,
    distance: 100,
    shouldSort: true,
    keys: [
      'name',
      'description',
      'topic',
    ],
  };

  const fuse = new Fuse(resourcesContents, searchOptions);

  let searchedResources = resourcesContents;
  if (searchString !== '') {
    searchedResources = fuse.search(searchString).map(
      (result) => result.item)
  }

  // find which columns have active filters 
  // and build array of the filter strings
  const activeFilters = {}
  Object.entries(filters).forEach(
    ([column, options]) => {
      Object.entries(options).forEach(
        ([option, active]) => {
          if (active) {
            if (!activeFilters[column]) {
              activeFilters[column] = []
            }
            activeFilters[column].push(option)
          }
      })
    })

  let filteredResources = [];
  let unselectedResources = searchedResources;
  Object.entries(activeFilters).forEach((([column, strings]) => {
    filteredResources.push(...unselectedResources.filter(
      r => strings.some(v => r[column].includes(v))
    ))
    unselectedResources = unselectedResources.filter(
      r => !strings.some(v => r[column].includes(v))
    )
  }))

  if (filteredResources.length === 0) {
    filteredResources = unselectedResources;
  }


  // when the user clicks a checkbox, 
  // flip the boolean value for that checkbox
  const onClickCheckbox = (column, option, e) => {
    setFilters({
      ...filters,
      [column]: {
        ...filters[column],
        [option]: !filters[column][option],
      },
    })
  }

  
  // Create dropdown and checkbox elements based on filters
  const checkboxElements = Object.entries(filters)
    .map(([column, options]) => (
      <Dropdown key={column}>
        <p><strong>{column}</strong> (all selected)</p>
         {Object.entries(options)
           .map(([option, active]) => (
             <div className={styles.checkboxRow} key={option}>
               <label>
                 <input 
                   type="checkbox" 
                   name={option}
                   checked={active}
                   onChange={onClickCheckbox.bind(this, column, option)}
                 />
               {option}</label>
             </div>
           ))}
      </Dropdown>
    ))


  // create the resources elements
  const resourcesElements = filteredResources.map(r => (
      <div className={styles.resource} key={r.name}>
        <div className={styles.info}>
          <h2>{r.topic}</h2>
          <h1>{r.name}</h1>
          <a href={r.link}>{r.link.split('/').slice(0,3).join('/')}</a>
          <p>{r.description}</p>
        </div>
        <div className={styles.image}>
          <img src={imgpath + r.image} alt={r.name + " Image"}/>
        </div>
      </div>
    ))


  return (
    <Layout>
      <Helmet 
        title={`COVID Local Resources`} 
        meta={[{name: 'description', content: 'Resources for local leaders managing the COVID-19 pandemic.'}, ]}
      />

      <header className={styles.header}>
        <h1>Recommended Resources</h1>
      </header>

      <section className={styles.main}>

        <section className={styles.filterSection}>
          <h3>Filter resources</h3>
          <div className={styles.filters}>

            <DropdownGroup>

              {checkboxElements}

            </DropdownGroup>

            <input
              id="search"
              type="text" 
              name="search"
              aria-label="Search"
              className={styles.searchbox}
              value={searchString} 
              onChange={e => setSearchString(e.target.value)} 
              placeholder="search for..."
            />
          </div>
        </section>

        {resourcesElements}
        
      </section>
    </Layout>
  )
}

export default Resources;
