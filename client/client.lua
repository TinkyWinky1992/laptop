RegisterCommand('opengui', function()
    TriggerScreenblurFadeIn(1)
    SetNuiFocus(true, true)
    SendNUIMessage({
        type = "ui",
        action = true,
        data = {
            message = "Welcome to the UI!",
            hour = GetClockHours(),
            minutes = GetClockMinutes()
        }
    })
end)

RegisterCommand('close', function()
    TriggerScreenblurFadeOut(0)
    SetNuiFocus(false, false)
    SendNUIMessage({
        type = "ui",
        action = false
    })
end)


RegisterNUICallback('GetTime', function(data, cb)
    local hour = GetClockHours()
    local minutes = GetClockMinutes()

    -- Send time data back to the client
    cb({
        hour = hour,
        minutes = minutes
    })
end)

