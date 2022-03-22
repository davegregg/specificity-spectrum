function updateMeterView () {
    meterOutput.value = meterInput.value
}

const inputStyles = getComputedStyle(meterInput)
function jumpToTarget (event) {
    const {offsetX} = event
    const width = parseInt(inputStyles.getPropertyValue("width"))
    const percentage = Math.floor(offsetX / width * 100)

    meterInput.value = percentage
    updateMeterView()
}
