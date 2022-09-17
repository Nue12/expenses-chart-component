import React from 'react'
import '../Styles/totalSpenses.css'
import DalySpenses from '../../data.json'

function TotalSpenses() {

  const [highestSpense, setHighestSpense] = React.useState(0);

  React.useEffect(() => {
    const weeklySpenses = [];
    DalySpenses.map(spenses => {
      weeklySpenses.push(Math.round((Math.round(spenses.amount) / 70) * 130));
    })
    console.log(Math.max(...weeklySpenses))
    setHighestSpense(Math.max(...weeklySpenses));
  }, [])

  return (
    <section className='detailSpenses'>

      <h3>Spending - Last 7 days</h3>

      <div className='spencses-graph'>
        {
          DalySpenses && DalySpenses.map(dalySpenses => {
            return (
              <div className='graphs-container' key={dalySpenses.day}>
                {
                  highestSpense !== Math.round((Math.round(dalySpenses.amount) / 70) * 130) ?

                  <div className='hover-container'>
                    <div className='amountHover'>${dalySpenses.amount}</div>
                    <div 
                      style={{height: Math.round((Math.round(dalySpenses.amount) / 70) * 130)}} 
                      className='graph'
                    >
                    </div>
                  </div> :

                  <div className='highestHover-container'>
                    <div className='amountHover'>${dalySpenses.amount}</div>
                    <div 
                      style={{height: Math.round((Math.round(dalySpenses.amount) / 70) * 130)}} 
                      className='highestGraph'
                    >
                    </div>
                  </div>
                }
                
                <div>{dalySpenses.day}</div>
              </div>
            )
          })
        }
      </div>

      <div className='monthlySpenses'>
        <p>Total this month</p>
        <div className='totalAndRate'>
          <h1>$478.33</h1>
          <div className='MonthlyRate'>
            <strong>+2.4%</strong>
            <p>from last month</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default TotalSpenses