import React from 'react'
import config from './scripts-config'

const getThirdPartyScripts = () =>
  config.map(script => (
    <React.Fragment>
      <script key={script.key} src={script.src} async={!!script.async} />
      {script.variables && (
        <script dangerouslySetInnerHTML={{ __html: script.variables }} />
      )}
    </React.Fragment>
  ))

const onRenderBody = ({ setHeadComponents }) => setHeadComponents(getThirdPartyScripts())

export {
  onRenderBody
}
