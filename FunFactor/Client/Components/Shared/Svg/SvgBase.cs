using Microsoft.AspNetCore.Components;

namespace FunFactor.Client.Components.Shared.Svg
{
    public abstract class SvgBase : ComponentBase
    {
        [Parameter]
        public string? @class { get; set; }
    }
}
