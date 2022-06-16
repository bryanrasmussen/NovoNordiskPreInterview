import React from 'react';
import metadata from '../../data/metadata.const';
import { Select } from 'antd';
import './root.css';

const Root = () => {
    const { Option, OptGroup } = Select;
    const handleChange = (value) => {
        //no change events specified
        console.log(`selected ${value}`);
     };
    const optionsGroupsData = {};
    metadata.forEach((item, index) => {
        const {channel_name} = item;
        if (!optionsGroupsData[channel_name]) {
            optionsGroupsData[channel_name] = [];
        }
        const label = (item.label && item.label !== item.name) ? item.label + ' - ' : '';
        const option = {label: `${item.name} vial ${item.vial} time ${item.injection_utc}`, value: index, id: index};
        optionsGroupsData[channel_name].push(option);
    });
    const options = Object.entries(optionsGroupsData).map((optg, index) => {
        const label = optg[0];
        const data = optg[1];
        return {
            label,
            options: data
          }
    })
    return (
      <div className="main">
        <h1>Metadatavalg</h1>
        <Select 
            style={{ width: 500 }}
            mode="multiple"
            allowClear
            placeholder="Please select"
            options={options}
            onChange={handleChange}/>
     </div>
  );
};

export default Root;