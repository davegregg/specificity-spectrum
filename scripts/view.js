function updateMeterView () {
    meterOutput.value = meterInput.value
}

const inputStyles = getComputedStyle(meterInput)
function jumpToTarget ({ offsetX }) {
    const width = parseInt(inputStyles.getPropertyValue("width"))
    const percentage = Math.floor(offsetX / width * 100)

    meterInput.value = percentage
    updateMeterView()
}
