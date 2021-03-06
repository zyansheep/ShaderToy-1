void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;

    // Time varying pixel color
    float b = sin(iTime);
    // Output to screen
    fragColor = vec4(uv, b, 0.5);
}
