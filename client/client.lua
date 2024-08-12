RegisterCommand('opengui', function()
    TriggerScreenblurFadeIn(1)
    SetNuiFocus(true, true)
    SendNUIMessage({
        type = "ui",
        action = true,
    })
end)



RegisterCommand('close', function()
    TriggerScreenblurFadeOut(0)
    SetNuiFocus(false, false)
    SendNUIMessage({
        type = "ui",
        action = false,
    })
end)