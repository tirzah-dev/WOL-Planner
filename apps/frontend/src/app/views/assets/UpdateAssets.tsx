import { useState, useContext } from 'react';
// import { AssetContext } from './AssetContext';
import { AssetContext } from '../../app';

import './assets.css';

export const UpdateAssets = (props: any) => {
  const { removeAsset, assets } =
    useContext(AssetContext);
 
  

  console.log(assets);

  return (
    <div>
        Slide to delete
      {assets.map((asset) => (
        <div key={asset.id}>
          <p>Asset: {asset.asset}</p>
          <p>Amount: {asset.amount}</p>
          <div>
            <button type="button" className="asset_type_button" onClick={() => removeAsset(asset)}>
              Delete
            </button>
          </div>
          <br></br>
        </div>
      ))}
    </div>
  );
};
