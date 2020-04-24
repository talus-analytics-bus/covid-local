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

  let filteredResources = searchedResources;
  Object.entries(activeFilters).forEach((([column, strings]) => {
    filteredResources = filteredResources.filter(
      r => strings.some(v => r[column].includes(v))
    )}))

  if (Object.keys(activeFilters).length === 0) {
    filteredResources = searchedResources;
  }

  if (filteredResources.length === 0) {
    filteredResources = [{
      name: "No resources matching those filters.", 
      description: 'If you have a resource that could help, please consider submitting it through the Contact Us page.',
      organization: '', topic: '', phase: '', image: '', link: '', focus: '',
    }]
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
        <p><strong>{column}</strong></p>
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


  const activeFiltersElements = Object.entries(activeFilters).map(
    ([column, filters]) => (
      <div key={column} className={styles.column}>
        <h4><strong>{column}</strong>{filters.length > 1 ? ' (all selected)' : ''}</h4>

        {filters.map(filter => (
          <button key={filter} onClick={onClickCheckbox.bind(this, column, filter)}>
            {filter}
          </button>
          ))}

      </div>
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
        {r.image && 
          <div className={styles.image}>
            <img src={imgpath + r.image} alt={r.name + " Image"}/>
          </div>}
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
        <h3>Filter resources</h3>
        <section className={styles.filterSection}>
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

          {Object.keys(activeFilters).length !== 0 && 
          <div className={styles.activeFiltersBackground}>
            <h3 className={styles.activeFiltersTitle}>Selected Filters</h3>
            <section className={styles.activeFilters}>
              {activeFiltersElements}
            </section>
          </div>}

        </section>

        {resourcesElements}
      </section>
    </Layout>
  )
}

export default Resources;
