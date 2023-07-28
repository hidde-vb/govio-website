import React from 'react'

const MemberButton = ({ inverse }) => {
  const className = `button ${inverse && 'button--inverse'}`

  return (
    <a
      href="https://app.assistonline.eu/publiek/#/app/wachtlijst/331c4423-5916-4699-a6e5-8ac20a15b173/preview"
      rel="noreferrer"
      target="_blank"
    >
      <div role="button" className={className}>
        Word lid
      </div>
    </a>
  )
}

export default MemberButton
