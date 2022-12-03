import React from 'react'

const LegalNotices = () => {
  return (
    <div style={{minHeight: '811px', display:'flex', textAlign: 'center', flexDirection: 'column'}}>
        <div>
            <div style={{width: '80%', border: '1px solid black', backgroundColor: 'blue', margin: 'auto', 
         height: '50px', fontSize: '30px', color: '#fff',  alignItems: 'center', fontWeight: '500', paddingTop: '6px'}}>Sport World Legal Notices</div>
            <p style={{width: '80%', border: '1px solid', backgroundColor: 'lightblue', margin: 'auto', padding: '9px 9px', 
            textAlign: 'left', letterSpacing: '0.3px', textAlign: 'justify'}}>The following are trademarks or service marks of Sport World entities and may be used only with permission of 
                Sport World Properties, Inc. or the relevant Sport World entity: Major League, Major League Baseball, MLB, 
                the silhouetted batter logo, World Series, National League, American League, Division Series, League Championship Series, 
                All-Star Game, and the names, nicknames, logos, uniform designs, color combinations, and slogans designating the Major 
                League Baseball clubs and entities, and their respective mascots, events and exhibitions.</p>
        </div>
    </div>
  )
}

export default LegalNotices