import React, { useCallback, useState, useMemo } from 'react'
import {
  Container,
  Row,
  Button,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { usePerpetualDeposit } from 'hooks/usePerpetualDeposit'
import { usePerpetualWithdraw } from 'hooks/usePerpetualWithdraw'
import { ChancePoolClaimCard } from './components/ChancePoolClaimCard'
import BigNumber from 'bignumber.js'
import { ChancePoolStakeCard } from './components/ChancePoolStakeCard'
import { ChancePoolModal } from './components/ChancePoolModal'

export const ChancePool = ({
  accounts,
  web3,
  network
}) => {
  // const { path } = useRouteMatch();
  // const { contractId } = useParams();
  const { secondPool } = network
  const {
    poolAddress,
    poolLogo,
    poolTitle,
    poolSubtitle,
    rewardAddress,
    stakedSymbol,
  } = secondPool
  
  const { onWithdraw } = usePerpetualWithdraw(web3, accounts[0], poolAddress)
  const { onDeposit } = usePerpetualDeposit(web3, accounts[0], poolAddress)

  // Inputs
  const [isStaking, setStaking] = useState(false);
  const [isClaiming, setClaiming] = useState(false);
  
  // Modal
  const [isOpen, setOpen] = useState(false);
  const [stakeAction, setStakeAction] = useState('');


  // take reward
  const handleClaim = useCallback(async () => {
    setClaiming(true);
    await onWithdraw(new BigNumber(0))
    setClaiming(false)
  }, [onWithdraw, setClaiming])

  const handleAction = (action) => {
    setStakeAction(action);
    setOpen(true);
  }

  const handleStake = useCallback(async (amount) => {
    setStaking(true)
    if (stakeAction === 'Stake') {
      await onDeposit(amount)
    } else {
      await onWithdraw(amount)
    }
    setStaking(false)
  }, [stakeAction, onDeposit, onWithdraw, setStaking])

  const handleToggle = () => {
    setOpen(!isOpen);
  }

  return (
    <Container>

      <div className="p-2 mb-4">
        <img 
          src={require('assets/img/2nd-logo.png')}
          className="floating"
          style={{
            height: "40px",
            position: "absolute",
            width: "auto"
          }}
        />
        <img src={poolLogo} width="100" height="auto" alt="defiat" />
      </div>
      
      <h1 className="text-primary mb-2">
        {poolTitle}
      </h1>
      <p className="text-tertiary mb-2">
        {poolSubtitle}
      </p>
      {/* <p className="text-secondary mb-2">
        <b>Farming Boost: {stakingState.myBoost}%</b>
      </p> */}
      <p className="text-secondary mb-2">
        10% Withdrawal Fee<br/>
        <b>Fees are permanately locked in pool to serve as 2ND-UNI-V2 Liquidity</b>
      </p>
      

      <Row className="justify-content-center">
        <ChancePoolClaimCard
          web3={web3}
          accounts={accounts}
          network={network}
          handleClaim={handleClaim}
          shouldDisable={isClaiming || isStaking}
        />
        <ChancePoolStakeCard
          web3={web3}
          accounts={accounts}
          network={network}
          handleAction={(action) => handleAction(action)}
          shouldDisable={isClaiming || isStaking}
        />
      </Row>
      <div className="d-flex justify-content-center">
        <Button 
          color="primary"
          target="_blank"
          href={`https://app.uniswap.org/#/add/${rewardAddress}/ETH`}
        >
          Get {stakedSymbol} on Uniswap
        </Button>
      </div>
      {/* <p className="text-tertiary my-2">
        <b>
          * Farming Boost for 2ND is a staking multiplier earned by holding DFT
          <br/>
          You can earn up to 300% Boost by holding 300 DFT.
        </b>
      </p> */}
      
        
      <ChancePoolModal
        web3={web3}
        accounts={accounts}
        network={network}
        stakeAction={stakeAction}
        isOpen={isOpen}
        handleStake={(amount) => handleStake(amount)}
        handleToggle={handleToggle}
      />
    </Container>
  )
}